const BASE_URL = import.meta.env.BASE_URL;

export function withBase(pathname: string) {
  if (!pathname.startsWith("/")) {
    throw new Error(`Expected an absolute path starting with "/": ${pathname}`);
  }

  if (BASE_URL === "/") {
    return pathname;
  }

  const normalizedBase = BASE_URL.endsWith("/") ? BASE_URL.slice(0, -1) : BASE_URL;
  return pathname === "/" ? `${normalizedBase}/` : `${normalizedBase}${pathname}`;
}
