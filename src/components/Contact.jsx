export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Let's talk</h2>
      <p className="contact__lede">
        The fastest way to reach me is email. I usually reply within a day or two.
      </p>
      {/* Replace with your real email address */}
      <a className="contact__email" href="fizagilani05@gmail.com">
        Email
      </a>

      <div className="contact__socials">
        <a href="https://github.com/Syeda-Fiza-Gilani" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {/* Replace these with your real LinkedIn / X profile URLs */}
        <a href="www.linkedin.com/in/syeda-fiza-gilani-9081aa41b" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}
