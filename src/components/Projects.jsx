const projects = [
  {
    feature: true,
    title: "DocMorph AI",
    description:
      "Intelligent document processing and OCR pipeline. A decoupled monorepo — React client, Node/Express server — built after standard OCR scripts kept crashing on large, multi-page scanned PDFs. Memory-safe text chunking breaks documents into sequential streams instead of loading them whole, and the drag-and-drop UI shows real conversion states from upload through OCR to a finished .docx.",
    tags: "React · Node.js · Tesseract OCR",
    link: { href: "https://github.com/Syeda-Fiza-Gilani/docmorph-ai", label: "View on GitHub" },
  },
  {
    title: '"Zero-Risk" VIP Support HITL Engine',
    description:
      'An enterprise sentiment and human-in-the-loop escalation pipeline. Incoming tickets are checked against HubSpot for account tier, routed through Gemini for sentiment analysis and a drafted reply, then held at an n8n Wait node — nothing goes out to a VIP client until a human clicks "Approve & Send" on the Slack alert.',
    tags: "n8n · Gemini · HubSpot · Slack",
    link: { href: "https://github.com/Syeda-Fiza-Gilani/zero-leak-lead-router-with-calendar-booking", label: "View on GitHub" },
  },
  {
    title: "Autonomous Web & Social Media Crawler",
    description:
      "A resilient data scraper for lead enrichment, built to avoid the CPU/RAM cost of DOM-heavy tools like Selenium. Pages are converted to markdown in the cloud, then a strict JSON schema parser on Gemini extracts fields like LinkedIn and Twitter URLs straight into Google Sheets and HubSpot.",
    tags: "n8n · Gemini · SerpApi",
    link: { href: "https://github.com/Syeda-Fiza-Gilani/n8n-enriched-lead-router", label: "View on GitHub" },
  },
];

export default function Projects() {
  return (
    <section className="work" id="work">
      <h2 className="section-title">Selected work</h2>

      <div className="work__grid">
        {projects.map((project) =>
          project.feature ? (
            <article className="project project--feature" key={project.title}>
              <div className="project__info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="project__tags">{project.tags}</span>
              </div>
              {project.link && (
                <a
                  className="project__link"
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.link.label}
                </a>
              )}
            </article>
          ) : (
            <article className="project" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="project__tags">{project.tags}</span>
              {project.link && (
                <a
                  className="project__link"
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.link.label}
                </a>
              )}
            </article>
          )
        )}
      </div>
    </section>
  );
}
