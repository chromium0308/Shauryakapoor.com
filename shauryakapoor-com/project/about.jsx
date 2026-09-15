function AboutPage() {
  return (
    <section id="me" data-screen-label="ME!">
      <div className="hero-top">
        <div className="hero-text">
          <div className="eyebrow">Filed under: PERSONAL · ONGOING</div>
          <h1 className="about-name">
            <span>Shaurya</span>
            <span className="last">Kapoor.</span>
          </h1>
          <div className="about-tag">18 y/o builder · Websummit Scholar '25 · Eirspace</div>
        </div>

        <div className="portrait-wrap">
          <img className="portrait" src="assets/me.png" alt="Shaurya" />
          <div className="portrait-caption"></div>
        </div>
      </div>

      <div className="about-bio">
        <p>




        </p>
        <p>
           
          <em></em>
          <em></em>
        </p>
      </div>

      <div className="socials">
        <a className="chip maroon" href="mailto:shaurya@kapoor.ie">Email</a>
        <a className="chip" href="https://github.com/chromium0308" target="_blank" rel="noreferrer">GitHub</a>
        <a className="chip" href="https://x.com/_chromium_0308" target="_blank" rel="noreferrer">X / Twitter</a>
        <a className="chip" href="https://www.linkedin.com/in/shaurya-kapoor-99ba292b7/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="chip gold" href="https://www.instagram.com/shauryak_0308/" target="_blank" rel="noreferrer">Instagram</a>
      </div>

      <div className="now-card">
        <div className="now-head">
          <div className="now-title">★ Currently Working On</div>
          <div className="now-date">Updated · May 2026</div>
        </div>
        <div className="now-body">
          <p>building rockets for Eirspace </p>
          <p>Zenemic (event-planning app) is in beta, and the</p>
          <p>vertically-deployed drone is on the bench.</p>
          <p style={{ fontFamily: "var(--f-body)", fontSize: 14, marginTop: 18, lineHeight: 1.6, color: "var(--ink)" }}>




          </p>
        </div>
        <div className="now-tags">
          <span>Eirspace</span>
          <span>UCDFS</span>
          <span>Zenemic</span>
          <span>Dublin</span>
        </div>
      </div>
    </section>
  );
}

window.AboutPage = AboutPage;
