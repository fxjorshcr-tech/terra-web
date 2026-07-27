import { NextRequest, NextResponse } from "next/server";

const locales = ["es", "en", "fr", "de"];
const defaultLocale = "es";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const tieneLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (tieneLocale) return;

  // Detectar idioma preferido del navegador; español por defecto.
  const header = req.headers.get("accept-language") ?? "";
  const preferido =
    locales.find((l) =>
      header
        .split(",")
        .some((parte) => parte.trim().toLowerCase().startsWith(l))
    ) ?? defaultLocale;

  const url = req.nextUrl.clone();
  url.pathname = `/${preferido}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Excluir archivos estáticos y rutas internas de Next.
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
