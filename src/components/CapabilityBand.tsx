const capabilities = [
  {
    title: "Flagship product apps",
    text: "E-commerce, learning, and adoption products that combine frontend polish with backend logic and admin workflows."
  },
  {
    title: "Interactive frontend builds",
    text: "Browser games and interface systems that show motion, state handling, and stronger visual rhythm."
  },
  {
    title: "Professional delivery",
    text: "Case-study structure, deployable codebases, and design decisions that stay grounded in how products actually work."
  }
];

export function CapabilityBand() {
  return (
    <section className="grid gap-6 lg:grid-cols-3">
      {capabilities.map((item) => (
        <div
          key={item.title}
          className="rounded-[2rem] border border-line bg-[rgba(255,252,249,0.78)] p-7 shadow-editorial"
        >
          <p className="text-xs uppercase tracking-[0.28em] text-accent">{item.title}</p>
          <p className="mt-4 text-base leading-8 text-muted">{item.text}</p>
        </div>
      ))}
    </section>
  );
}
