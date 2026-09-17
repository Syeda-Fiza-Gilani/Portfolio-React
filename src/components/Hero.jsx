export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__text">
        <p className="hero__kicker">AI-native full-stack engineer &amp; RevOps architect</p>
        <h1 className="hero__headline">
          I build AI systems<br />
          that don't <em>break</em> under scale.
        </h1>
        <p className="hero__lede">
          I'm Syeda Fiza Gilani — known online as Pixel-Quark. I bridge raw
          LLM capability with production full-stack apps and enterprise
          revenue operations: memory-efficient backends, vector search, and
          human-in-the-loop automation for messy, unstructured data.
        </p>
        <div className="hero__actions">
          <a href="#work" className="btn btn--primary">See the work</a>
          <a href="#contact" className="btn btn--ghost">Get in touch</a>
        </div>
      </div>

      <div className="hero__portrait">
        {/*
          Ambient pulse rings — always on, independent of the chat assistant.
          Only `transform` and `opacity` are animated, so this runs on the
          compositor thread and costs nothing on the main thread/CPU.
        */}
        <div className="pulse">
          <span className="pulse__ring"></span>
          <span className="pulse__ring"></span>
          <span className="pulse__ring"></span>
        </div>
        {/* Replace src with your own photo. A square image, 600x600px or larger, works best. */}
        <img
          className="hero__photo"
          src="ChatGPT Image Sep 15, 2026, 04_30_45 PM.png"
          alt="Portrait of Syeda Fiza Gilani"
          width="320"
          height="320"
          loading="eager"
        />
      </div>
    </section>
  );
}