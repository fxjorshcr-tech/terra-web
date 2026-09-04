import { Resend } from "resend";

// Destinatarios del formulario de contacto. Se pueden sobreescribir con la
// variable de entorno CONTACT_TO (separados por coma).
const DESTINATARIOS_DEFAULT = [
  "orostudioscr@gmail.com",
  "orozrealestate@gmail.com",
];

// Remitente. Mientras el dominio no esté verificado en Resend se usa el
// remitente de pruebas `onboarding@resend.dev`, que SOLO entrega al correo
// dueño de la cuenta de Resend. Al verificar el dominio, definir por ejemplo:
//   RESEND_FROM="Oroz Real Estate <contacto@orozrealestate.com>"
const FROM_DEFAULT = "Oroz Real Estate <onboarding@resend.dev>";

export type ContactPayload = {
  nombre: string;
  telefono?: string;
  email?: string;
  interes?: string;
  mensaje: string;
  origen: "contacto" | "footer";
  lang: string;
};

export function destinatarios(): string[] {
  const raw = process.env.CONTACT_TO;
  if (!raw) return DESTINATARIOS_DEFAULT;
  const lista = raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  return lista.length ? lista : DESTINATARIOS_DEFAULT;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function fila(label: string, valor?: string) {
  if (!valor) return "";
  return `<tr>
    <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:13px;white-space:nowrap;vertical-align:top">${label}</td>
    <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#111827;font-size:14px">${escapeHtml(valor).replace(/\n/g, "<br/>")}</td>
  </tr>`;
}

export function construirCorreo(p: ContactPayload) {
  const fecha = new Date().toLocaleString("es-CR", {
    timeZone: "America/Costa_Rica",
    dateStyle: "full",
    timeStyle: "short",
  });
  const origen = p.origen === "footer" ? "Pie de página" : "Página de contacto";
  const subject = p.interes
    ? `Nuevo contacto web: ${p.nombre} — ${p.interes}`
    : `Nuevo contacto web: ${p.nombre}`;

  const html = `<!doctype html>
<html><body style="margin:0;padding:24px;background:#f3f6f4;font-family:Inter,Arial,sans-serif">
  <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb">
    <div style="background:#1f2a35;padding:20px 24px">
      <p style="margin:0;color:#b08d57;font-size:11px;letter-spacing:.2em;text-transform:uppercase;font-weight:600">Oroz Real Estate</p>
      <h1 style="margin:6px 0 0;color:#fff;font-size:20px;font-weight:600">Nuevo mensaje desde el sitio web</h1>
    </div>
    <table style="width:100%;border-collapse:collapse;margin:8px 0">
      ${fila("Nombre", p.nombre)}
      ${fila("Teléfono", p.telefono)}
      ${fila("Correo", p.email)}
      ${fila("Interés", p.interes)}
      ${fila("Mensaje", p.mensaje)}
    </table>
    <div style="padding:14px 24px;background:#f9fafb;color:#9ca3af;font-size:12px">
      ${origen} · Idioma: ${p.lang.toUpperCase()} · ${fecha}
    </div>
  </div>
</body></html>`;

  const text = [
    `Nuevo mensaje desde el sitio web (${origen}, ${p.lang.toUpperCase()})`,
    ``,
    `Nombre: ${p.nombre}`,
    p.telefono ? `Teléfono: ${p.telefono}` : null,
    p.email ? `Correo: ${p.email}` : null,
    p.interes ? `Interés: ${p.interes}` : null,
    ``,
    `Mensaje:`,
    p.mensaje,
    ``,
    fecha,
  ]
    .filter((l) => l !== null)
    .join("\n");

  return { subject, html, text };
}

export type EnvioResultado = {
  ok: boolean;
  entregados: string[];
  fallidos: { to: string; error: string }[];
};

/**
 * Envía el correo a cada destinatario por separado y considera exitoso el
 * envío si al menos uno fue aceptado por Resend. Así, mientras el dominio no
 * esté verificado (modo prueba, que sólo permite el correo del dueño de la
 * cuenta), el formulario sigue funcionando y el resto de fallos queda en logs.
 */
export async function enviarContacto(p: ContactPayload): Promise<EnvioResultado> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("Falta la variable de entorno RESEND_API_KEY");
  }
  const resend = new Resend(apiKey);
  const from = process.env.RESEND_FROM || FROM_DEFAULT;
  const { subject, html, text } = construirCorreo(p);

  const resultados = await Promise.all(
    destinatarios().map(async (to) => {
      const { data, error } = await resend.emails.send({
        from,
        to,
        subject,
        html,
        text,
        ...(p.email ? { replyTo: p.email } : {}),
      });
      if (error || !data) {
        return { to, error: error?.message ?? "Respuesta vacía de Resend" };
      }
      return { to, error: null };
    })
  );

  const entregados = resultados.filter((r) => !r.error).map((r) => r.to);
  const fallidos = resultados
    .filter((r): r is { to: string; error: string } => !!r.error)
    .map((r) => ({ to: r.to, error: r.error }));

  return { ok: entregados.length > 0, entregados, fallidos };
}
