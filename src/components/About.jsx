const stats = [
  { value: "Google IT Support", label: "certified, infrastructure background" },
  { value: "3", label: "featured case studies below" },
  { value: "FastAPI · Next.js", label: "Qdrant · Supabase · Gemini · n8n" },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__body">
        <h2 className="section-title">A little about how I work</h2>
        <p>
          I came into full-stack AI engineering from IT infrastructure and
          visual workflow automation — I'm Google IT Support Certified, and
          that background shows up in how I build: I care about what happens
          when the system is under memory pressure, not just when the demo
          works.
        </p>
        <p>
          My local development environment is deliberately constrained
          (4GB RAM, spinning HDDs), so I design around that reality rather
          than against it — offloading heavy parsing to cloud APIs, using
          memory-safe chunking, and rejecting unnecessary local compute
          bloat. I'm working toward contributing to Google Summer of Code
          2027 and remote engineering roles at developer-first companies
          like GitLab, Automattic, PostHog, and Canonical.
        </p>
      </div>

      <aside className="about__stats">
        {stats.map((stat) => (
          <div className="stat" key={stat.value}>
            <span className="stat__value">{stat.value}</span>
            <span className="stat__label">{stat.label}</span>
          </div>
        ))}
      </aside>
    </section>
  );
}