type SocialIconProps = {
  kind: "email" | "linkedin";
  className?: string;
};

export function SocialIcon({ kind, className = "h-4 w-4" }: SocialIconProps) {
  if (kind === "linkedin") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M5.2 8.8h3.4V20H5.2V8.8Zm1.7-5.4c1.1 0 1.9.8 1.9 1.8S8 7 6.9 7 5 6.2 5 5.2s.8-1.8 1.9-1.8ZM10.7 8.8H14v1.5h.1c.5-.9 1.6-1.8 3.3-1.8 3.5 0 4.1 2.3 4.1 5.3V20h-3.4v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V20h-3.4V8.8Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4.5 6.5h15v11h-15v-11Z" />
      <path d="m5 7 7 6 7-6" />
    </svg>
  );
}
