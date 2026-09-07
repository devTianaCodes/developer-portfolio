export function resolveLiveAppUrl(value: string | undefined, fallback: string): string {
  const candidate = value === undefined ? fallback : value.trim();

  // An explicitly empty override disables the optional demo link.
  if (!candidate) return "";

  try {
    const url = new URL(candidate);
    if (url.protocol === "https:" && !url.username && !url.password) return candidate;
  } catch {
    // Malformed configuration must never become a relative or executable link.
  }

  throw new Error("Live app URLs must be absolute HTTPS URLs without credentials.");
}
