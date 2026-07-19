import { CredentialGallery } from "@/components/CredentialGallery";
import { PageReveal } from "@/components/PageReveal";
import { degreeCredentials, professionalCredentials } from "@/content/credentials";

export const metadata = {
  title: "Credentials & Learning"
};

export default function CredentialsPage() {
  return (
    <PageReveal>
      <div className="space-y-10">
        <section className="space-y-4">
          <p className="section-label">Credentials & Learning</p>
          <h1 className="minimal-heading max-w-5xl text-5xl md:text-6xl">Continuous learning, documented.</h1>
        </section>

        <CredentialGallery credentials={professionalCredentials} />

        <section data-testid="higher-education-credentials" className="space-y-6">
          <p className="section-label">Higher education</p>

          <div className="grid gap-5 md:grid-cols-3">
            {degreeCredentials.map((degree) => (
              <article key={degree.slug} className="flex min-w-0 flex-col p-6 sharp-panel">
                <p className="section-label">{degree.level}</p>
                <h2 className="minimal-heading mt-3 text-2xl">{degree.field}</h2>
                <p className="mt-3 font-sans text-sm font-semibold leading-6 text-ink">{degree.specialization}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </PageReveal>
  );
}
