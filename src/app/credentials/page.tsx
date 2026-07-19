import { CredentialGallery, DegreeCredentialGallery } from "@/components/CredentialGallery";
import { PageReveal } from "@/components/PageReveal";
import { degreeCredentials, professionalCredentials } from "@/content/credentials";

export const metadata = {
  title: "Credentials"
};

export default function CredentialsPage() {
  return (
    <PageReveal>
      <div className="space-y-10">
        <section className="space-y-4">
          <p className="section-label">Credentials</p>
          <h1 className="minimal-heading max-w-5xl text-5xl md:text-6xl">Continuous learning</h1>
        </section>

        <CredentialGallery credentials={professionalCredentials} />

        <DegreeCredentialGallery credentials={degreeCredentials} />
      </div>
    </PageReveal>
  );
}
