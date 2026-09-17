export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Let's talk</h2>
      <p className="contact__lede">
        The fastest way to reach me is email. I usually reply within a day or two.
      </p>
      {/* Replace with your real email address */}
      <a className="contact__email" href="mailto:hello@pixelquark.dev">
        hello@pixelquark.dev
      </a>

      <div className="contact__socials">
        <a href="https://github.com/Pixel-Quark" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {/* Replace these with your real LinkedIn / X profile URLs */}
        <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Twitter / X</a>
      </div>
    </section>
  );
}