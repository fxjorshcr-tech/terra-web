import { NextResponse } from "next/server";
import { enviarContacto, type ContactPayload } from "@/lib/email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX = { nombre: 120, telefono: 40, email: 160, interes: 80, mensaje: 4000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function limpiar(v: unknown, max: number): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: los bots suelen rellenar todos los campos. Si viene con valor,
  // respondemos como si todo hubiera salido bien pero no enviamos nada.
  if (limpiar(body.empresa, 200)) {
    return NextResponse.json({ ok: true });
  }

  const payload: ContactPayload = {
    nombre: limpiar(body.nombre, MAX.nombre),
    telefono: limpiar(body.telefono, MAX.telefono) || undefined,
    email: limpiar(body.email, MAX.email) || undefined,
    interes: limpiar(body.interes, MAX.interes) || undefined,
    mensaje: limpiar(body.mensaje, MAX.mensaje),
    origen: body.origen === "footer" ? "footer" : "contacto",
    lang: limpiar(body.lang, 5) || "es",
  };

  if (!payload.nombre || !payload.mensaje) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }
  if (payload.email && !EMAIL_RE.test(payload.email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  try {
    const resultado = await enviarContacto(payload);
    if (resultado.fallidos.length) {
      console.warn("[contact] entregas fallidas:", resultado.fallidos);
    }
    if (!resultado.ok) {
      return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] error enviando correo:", err);
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}
