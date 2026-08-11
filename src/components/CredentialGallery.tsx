"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import type { CredentialEntry, DegreeCredential } from "@/content/credentials";

type CredentialGalleryProps = {
  credentials: readonly CredentialEntry[];
};

type DegreeCredentialGalleryProps = {
  credentials: readonly DegreeCredential[];
};

type ModalCredential = {
  eyebrow: string;
  title: string;
  image: string;
  imageAlt: string;
  description: string;
};

type CertificateModalProps = {
  credential: ModalCredential;
  onClose: () => void;
};

type CertificateModalPortalProps = {
  credential: ModalCredential | null;
  onClose: () => void;
};

const modalTransition = { duration: 0.24, ease: [0.25, 0.8, 0.25, 1] } as const;

function CertificateModal({ credential, onClose }: CertificateModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const tCommon = useTranslations("Common");

  useEffect(() => {
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleDocumentKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleDocumentKeyDown);

    return () => {
      document.removeEventListener("keydown", handleDocumentKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [onClose]);

  function keepFocusInside(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Tab") return;

    const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
      'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
    );

    if (!focusableElements?.length) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-2.5 backdrop-blur-[2px] sm:p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={modalTransition}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        data-testid="credential-modal"
        className="flex max-h-[calc(100vh-1.25rem)] w-full max-w-6xl flex-col overflow-hidden rounded-[6px] border border-white/24 bg-white shadow-[0_32px_100px_rgba(0,0,0,0.45)] sm:max-h-[calc(100vh-2.5rem)]"
        initial={{ opacity: 0, y: 18, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.99 }}
        transition={modalTransition}
        onKeyDown={keepFocusInside}
      >
        <div className="flex items-start justify-between gap-5 border-b border-line px-4 py-4 sm:px-6">
          <div className="min-w-0">
            <p className="section-label">{credential.eyebrow}</p>
            <h2 id={titleId} className="minimal-heading mt-2 text-xl sm:text-2xl">{credential.title}</h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label={tCommon("close")}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[3px] border-2 border-[#262626] text-2xl leading-none text-[#262626] transition hover:bg-[#262626] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <div className="relative h-[54vh] min-h-[260px] bg-slate-100 sm:h-[64vh] sm:min-h-[360px]">
          <Image
            src={credential.image}
            alt={credential.imageAlt}
            fill
            priority
            className="object-contain p-2 sm:p-5"
            sizes="(max-width: 640px) 96vw, 88vw"
          />
        </div>

        <p className="border-t border-line px-4 py-4 text-sm leading-6 text-muted sm:px-6">
          {credential.description}
        </p>
      </motion.div>
    </motion.div>
  );
}

function CertificateModalPortal({ credential, onClose }: CertificateModalPortalProps) {
  const [portalReady, setPortalReady] = useState(false);

  useEffect(() => {
    setPortalReady(true);
  }, []);

  if (!portalReady) return null;

  return createPortal(
    <AnimatePresence>
      {credential ? <CertificateModal credential={credential} onClose={onClose} /> : null}
    </AnimatePresence>,
    document.body
  );
}

type GalleryCredential = ModalCredential & {
  slug: string;
  buttonLabel: string;
};

type CredentialGalleryVariant = "professional" | "degree";

const galleryStyles: Record<
  CredentialGalleryVariant,
  {
    section: string;
    grid: string;
    imageAspect: string;
    image: string;
    imageSizes: string;
    title: string;
    description: string;
  }
> = {
  professional: {
    section: "",
    grid: "md:grid-cols-2",
    imageAspect: "aspect-[16/10]",
    image: "p-4 sm:p-6",
    imageSizes: "(max-width: 767px) 96vw, 48vw",
    title: "text-2xl sm:text-3xl",
    description: "minimal-text mt-4 text-center text-sm leading-7 md:text-left"
  },
  degree: {
    section: "render-deferred-section",
    grid: "md:grid-cols-3",
    imageAspect: "aspect-[4/3]",
    image: "p-3",
    imageSizes: "(max-width: 767px) 96vw, 32vw",
    title: "text-2xl",
    description: "mt-3 text-center font-sans text-sm font-semibold leading-6 text-ink md:text-left"
  }
};

type CredentialGallerySectionProps = {
  credentials: readonly GalleryCredential[];
  dataTestId: string;
  sectionLabel: string;
  variant: CredentialGalleryVariant;
};

function CredentialGallerySection({
  credentials,
  dataTestId,
  sectionLabel,
  variant
}: CredentialGallerySectionProps) {
  const [activeCredential, setActiveCredential] = useState<ModalCredential | null>(null);
  const tCommon = useTranslations("Common");
  const styles = galleryStyles[variant];

  if (!credentials.length) return null;

  return (
    <>
      <section data-testid={dataTestId} className={`${styles.section} space-y-6`}>
        <p className="section-label">{sectionLabel}</p>

        <div className={`grid gap-5 ${styles.grid}`}>
          {credentials.map((credential) => (
            <article key={credential.slug} className="flex min-w-0 flex-col overflow-hidden sharp-panel">
              <button
                type="button"
                onClick={() => setActiveCredential(credential)}
                className={`group relative w-full overflow-hidden border-b border-line bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent ${styles.imageAspect}`}
                aria-label={`${tCommon("viewCertificate")}: ${credential.buttonLabel}`}
              >
                <Image
                  src={credential.image}
                  alt={credential.imageAlt}
                  fill
                  loading="lazy"
                  className={`object-contain transition duration-300 group-hover:scale-[1.015] ${styles.image}`}
                  sizes={styles.imageSizes}
                />
              </button>

              <div className="flex flex-1 flex-col p-6">
                <p className="section-label">{credential.eyebrow}</p>
                <h2 className={`minimal-heading mt-3 ${styles.title}`}>{credential.title}</h2>
                <p className={styles.description}>{credential.description}</p>
                <div className="mt-auto flex justify-center pt-6 md:justify-start">
                  <button
                    type="button"
                    onClick={() => setActiveCredential(credential)}
                    className="sharp-button"
                  >
                    {tCommon("viewCertificate")}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CertificateModalPortal
        credential={activeCredential}
        onClose={() => setActiveCredential(null)}
      />
    </>
  );
}

export function CredentialGallery({ credentials }: CredentialGalleryProps) {
  const tCredentials = useTranslations("Credentials");
  const galleryCredentials = credentials.map((credential) => ({
    slug: credential.slug,
    eyebrow: `${credential.issuer} · ${credential.date}`,
    title: credential.title,
    image: credential.image,
    imageAlt: credential.imageAlt,
    description: credential.description,
    buttonLabel: credential.title
  }));

  return (
    <CredentialGallerySection
      credentials={galleryCredentials}
      dataTestId="professional-credentials"
      sectionLabel={tCredentials("professionalCertifications")}
      variant="professional"
    />
  );
}

export function DegreeCredentialGallery({ credentials }: DegreeCredentialGalleryProps) {
  const tCredentials = useTranslations("Credentials");
  const galleryCredentials = credentials.map((degree) => ({
    slug: degree.slug,
    eyebrow: degree.level,
    title: degree.field,
    image: degree.image,
    imageAlt: degree.imageAlt,
    description: degree.specialization,
    buttonLabel: `${degree.level} - ${degree.field}`
  }));

  return (
    <CredentialGallerySection
      credentials={galleryCredentials}
      dataTestId="higher-education-credentials"
      sectionLabel={tCredentials("higherEducation")}
      variant="degree"
    />
  );
}
