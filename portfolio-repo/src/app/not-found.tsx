import Link from "next/link";

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans text-ink antialiased">
        <main className="flex min-h-screen items-center justify-center bg-[var(--color-main-background)] px-4 py-12">
          <div className="sharp-panel w-full max-w-3xl p-10">
            <p className="section-label">404</p>
            <h1 className="minimal-heading mt-4 text-5xl">Page not found.</h1>
            <p className="minimal-text mt-4 max-w-2xl">
              The page you are looking for is not available.
            </p>
            <Link href="/" className="sharp-button mt-8">
              Back to home
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
