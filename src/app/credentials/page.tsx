import { CredentialGallery } from "@/components/CredentialGallery";
import { PageReveal } from "@/components/PageReveal";
import { professionalCredentials } from "@/content/credentials";

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
      </div>
    </PageReveal>
  );
}
