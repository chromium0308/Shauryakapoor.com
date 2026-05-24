import React from "react";

type ExperienceItem = {
  when: string;
  sub: string;
  role: string;
  company: string;
  desc: string;
  stamp: string;
  sub2: string;
  featured?: boolean;
};

const EXPERIENCE: ExperienceItem[] = [
  {
    when: "2026 — Present",
    sub: "Internship · Dublin",
    role: "AI Development Intern",
    company: "Arcus Innovation Studios — 360 Social Impact Studios",
    desc: "Working as an AI development intern, contributing to innovative projects that combine artificial intelligence with social impact initiatives.",
    stamp: "Intern · 2026–",
    sub2: "Arcus · AI",
    featured: true,
  },
  {
    when: "2025",
    sub: "Scholarship · Lisbon",
    role: "Web Summit 2025 Scholar",
    company: "Web Summit '25",
    desc: "Selected for a prestigious programme that granted access to a Web Summit chairperson ticket worth €25,000. The scholarship gives unparalleled access to global tech leaders and innovative startups.",
    stamp: "Scholar",
    sub2: "Chairperson Ticket",
  },
  {
    when: "Sep 2025 — Jan 2026",
    sub: "B.Eng · UCD",
    role: "Engineering",
    company: "University College Dublin",
    desc: "Studied Engineering at one of Ireland's leading universities, splitting time between coursework, the workshop, and whatever side-project was eating my evenings.",
    stamp: "Drop Out",
    sub2: "UCD · '25–'26",
  },
  {
    when: "2023",
    sub: "TY Work Experience",
    role: "Web Summit",
    company: "Web Summit · Lisbon",
    desc: "TY work experience — explored multiple fields of work and different working styles across a week-long programme.",
    stamp: "TY · 2023",
    sub2: "Week-Long",
  },
  {
    when: "2022",
    sub: "TY Work Experience",
    role: "IT Intern",
    company: "Unipol RE",
    desc: "TY work experience — learned technical and computing skills while shadowing and working alongside the IT team.",
    stamp: "TY · 2022",
    sub2: "Shadowing · IT",
  },
];

const LANGUAGES = [
  { lang: "English", level: "Fluent" },
  { lang: "Hindi", level: "Fluent" },
  { lang: "German", level: "B2 Level" },
];

const EDUCATION = [
  {
    school: "University College Dublin",
    degree: "Engineering",
    when: "Sep 2025 — Jan 2026",
  },
  {
    school: "The Institute of Education",
    degree: "Leaving Certificate — 613 points",
    when: "2023 — 2025",
  },
];

type Project = {
  n: string;
  year: string;
  name: string;
  cat: string;
  desc: string;
  tag?: string;
  link?: string;
  href?: string;
  size: "s-2" | "s-3" | "s-4" | "s-6";
  feature?: boolean;
  shelved?: boolean;
  image?: string;
  label?: string;
};

const CURRENT_PROJECTS: Project[] = [
  {
    n: "01",
    year: "Now · 2026",
    name: "Eirspace",
    cat: "Rocketry · IRL",
    desc: "Rocketry program where we build rockets to compete in EUROK. Yes, it really is rocket science!",
    tag: "Solidworks · Ansys · Open Rocket · Excel",
    link: "eirspace.org →",
    href: "https://www.eirspace.org/about",
    size: "s-4",
    feature: true,
    image: "/assets/eirspace.png",
    label: "Eirspace · signed rocket fin",
  },
  {
    n: "02",
    year: "Now · 2026",
    name: "Zenemic",
    cat: "Event-Planning App",
    desc: "An event planning assistance app that simplifies organising and managing events.",
    tag: "React Native · Expo · Swift",
    link: "In beta →",
    size: "s-2",
    image: "/assets/zenemic.png",
    label: "Zenemic · iOS",
  },
  {
    n: "03",
    year: "Now · 2026",
    name: "Vertically Deployed Drone",
    cat: "Hardware · Docking",
    desc: "A drone that deploys from a vertical surface where it docks to a charge using a magnetic hinge that's built into the dock.",
    tag: "Solidworks · Arduino",
    link: "Build log →",
    size: "s-3",
    image: "/assets/vdd.jpg",
    label: "VDD · concept sketch",
  },
  {
    n: "04",
    year: "Now · 2026",
    name: "Abandoned Train Line Cart",
    cat: "Woodwork · Hardware",
    desc: "Designing and manufacturing a cart that is meant to run on abandoned Irish train lines.",
    tag: "Woodwork · Hardware",
    link: "Build log →",
    size: "s-3",
    image: "/assets/train-cart.png",
    label: "Cart · workshop progress",
  },
];

const COMPLETED_PROJECTS: Project[] = [
  {
    n: "05",
    year: "2025",
    name: "UCDFS",
    cat: "Formula Student",
    desc: "Working on a student F1 car for Formula Student competition, pushing the boundaries of automotive engineering.",
    tag: "Ansys · Onshape",
    link: "ucdfs.ie →",
    href: "https://ucdfs.ie/home-1",
    size: "s-4",
    feature: true,
    image: "/assets/ucdfs.png",
    label: "UCDFS · Silverstone, E135",
  },
  {
    n: "06",
    year: "2025",
    name: "ExamEasy",
    cat: "AI Tutor · Leaving Cert",
    desc: "A Leaving cert exam question tutor that utilises AI to teach you every step of every problem.",
    tag: "React · Next.js · Python",
    link: "exameasy.ie →",
    href: "https://Exameasy.ie",
    size: "s-2",
    image: "/assets/exameasy.png",
    label: "ExamEasy · all subjects",
  },
  {
    n: "07",
    year: "2025",
    name: "Braille Reader",
    cat: "Accessibility",
    desc: "A React Native and Expo app for learning Braille, supported by hardware prototypes built with Arduino and Solidworks for tactile feedback.",
    tag: "React Native · Expo · Gemini",
    link: "Case study →",
    size: "s-3",
    image: "/assets/braille.png",
    label: "Braille Reader · prototype",
  },
  {
    n: "08",
    year: "2025",
    name: "Ventria",
    cat: "Health · Apple Watch",
    desc: "HIPAA-secured heart monitoring app with Apple Watch sync — heart rate, HRV, steps, sleep, and AI-powered heart failure risk insights.",
    tag: "Xcode · Swift",
    link: "Demo →",
    href: "https://medathon-production.up.railway.app/",
    size: "s-3",
    image: "/assets/ventria.jpg",
    label: "Medathon · 27 Feb 2026",
  },
  {
    n: "09",
    year: "2024",
    name: "Solid Works IDE",
    cat: "Shelved · Cloud Tooling",
    desc: "A cloud-based IDE that transforms SolidWorks files into STEP format, enabling seamless editing and collaboration in the cloud.",
    tag: "Next.js · Python · Solidworks API",
    link: "Notes →",
    size: "s-2",
    shelved: true,
    image: "/assets/solidworks.png",
    label: "SolidWorks · IDE",
  },
  {
    n: "10",
    year: "2025",
    name: "Movinnit.ai",
    cat: "AI · Relocation",
    desc: "An AI-powered web platform that simplifies international relocation by handling all the complex paperwork and documentation requirements.",
    tag: "Next.js · Python",
    link: "movinnit.ai →",
    href: "https://movinnitai.up.railway.app/",
    size: "s-2",
    image: "/assets/movinnit.png",
    label: "Movinnit.ai",
  },
  {
    n: "11",
    year: "2023",
    name: "Vex V5 Robotics",
    cat: "Competition Robotics",
    desc: "Competed in Vex robotics as part of the Institute of Education robotics team, designing and building competitive robots.",
    tag: "Onshape · Solidworks",
    link: "vexrobotics.com →",
    href: "https://www.vexrobotics.com/v5/competition/vrc-current-game",
    size: "s-2",
    label: "Vex V5 · season bot",
    image: "/assets/vex-v5.png",
  },
  {
    n: "12",
    year: "2024",
    name: "Model Jet Engine",
    cat: "Workshop · Hands-on",
    desc: "Built a partially functional jet engine from hairdryer scrap parts, exploring fundamental physics and engineering principles through hands-on experimentation.",
    tag: "Solidworks",
    link: "Photos →",
    size: "s-3",
    image: "/assets/jet-engine.png",
    label: "Jet engine v1 · scrap-built",
  },
  {
    n: "13",
    year: "2023",
    name: "Dukes Schools Competition",
    cat: "Best Engineered Solution",
    desc: "Winner of best engineered solution at the annual Dukes Schools Engineering competition, representing The Institute of Education internationally in London.",
    size: "s-3",
    image: "/assets/dukes.png",
    label: "Dukes · winners' stage",
  },
  {
    n: "14",
    year: "2024",
    name: "Build Space S5",
    cat: "Nights & Weekends",
    desc: "Conceptualized an innovative energy-generating speed breaker design that harnesses kinetic energy from vehicles.",
    link: "buildspace →",
    href: "https://buildspace.so/s5/welcome",
    size: "s-3",
    image: "/assets/buildspace.png",
    label: "Buildspace · S5",
  },
  {
    n: "15",
    year: "2023",
    name: "TDI Challenge",
    cat: "Signing Glove",
    desc: "Designed and modeled a signing glove that helps deaf people learn sign language, combining technology with accessibility.",
    tag: "Solidworks",
    link: "mta.org.uk →",
    href: "https://www.mta.org.uk/resources/the-tdi-challenge/",
    size: "s-2",
    image: "/assets/signing-glove.png",
    label: "Signing glove · CAD",
  },
  {
    n: "16",
    year: "2023",
    name: "TEDI London",
    cat: "Eco Lotus · Award",
    desc: "Won most creative design award with Eco Lotus, a sustainable design solution that combines innovation with environmental consciousness.",
    tag: "Solidworks",
    link: "asu-london.ac.uk →",
    href: "https://asu-london.ac.uk/study-with-us/thinking-ahead-taster-programme/",
    size: "s-2",
    image: "/assets/eco-lotus.png",
  },
  {
    n: "17",
    year: "2023",
    name: "V6 Engine",
    cat: "CAD Deep-Dive",
    desc: "Designed and modeled a complete V6 engine with guidance from Alex's Engineering on YouTube, mastering the intricate complexities of SolidWorks.",
    tag: "Solidworks",
    link: "Renders →",
    size: "s-2",
    image: "/assets/v6-engine.png",
    label: "V6 · wireframe render",
  },
];

function AboutSection() {
  return (
    <section id="me" data-screen-label="ME!">
      <div className="hero-top">
        <div className="hero-text">
          <div className="eyebrow">Filed under: PERSONAL · ONGOING</div>
          <h1 className="about-name">
            <span>Shaurya</span>
            <span className="last">Kapoor.</span>
          </h1>
          <div className="about-tag">18 y/o builder · Websummit Scholar &apos;25 · Eirspace</div>
        </div>

        <div className="portrait-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="portrait" src="/assets/me.png" alt="Shaurya" />
          <div className="portrait-caption"></div>
        </div>
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

function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <div className={`exp-card ${item.featured ? "featured" : ""}`}>
      <div className="when">
        {item.when}
        <small>{item.sub}</small>
      </div>
      <div>
        <div className="role">{item.role}</div>
        <div className="company">{item.company}</div>
        <p className="desc">{item.desc}</p>
      </div>
      <div className="stamp-col">
        <div className="exp-stamp">
          {item.stamp}
          <small>{item.sub2}</small>
        </div>
      </div>
    </div>
  );
}

function ExperienceSection() {
  return (
    <section id="work" data-screen-label="The Work So Far">
      <div className="exp-head">
        <h1 className="exp-title">
          The <em>Yearbook.</em>
        </h1>
        <p className="exp-sub">
          A roughly-chronological transcript of teams I&apos;ve been on, programmes
          I&apos;ve gotten into, and benches I&apos;ve spent too many hours at. Most
          recent up top.
        </p>
      </div>

      <div className="exp-list">
        {EXPERIENCE.map((item, i) => (
          <ExperienceCard key={i} item={item} />
        ))}
      </div>

      <div className="extras">
        <div className="extras-card">
          <div className="extras-title">★ Education</div>
          <ul className="extras-list">
            {EDUCATION.map((e, i) => (
              <li key={i}>
                <div className="extras-row-head">
                  <span className="extras-row-school">{e.school}</span>
                  <span className="extras-row-when">{e.when}</span>
                </div>
                <div className="extras-row-degree">{e.degree}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="extras-card">
          <div className="extras-title">★ Languages</div>
          <ul className="extras-list lang-list">
            {LANGUAGES.map((l, i) => (
              <li key={i}>
                <span className="extras-row-school">{l.lang}</span>
                <span className="extras-row-when">{l.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p }: { p: Project }) {
  const inner = (
    <>
      <span className="pn">No. {p.n}</span>
      <div className="pyr">{p.year}</div>
      <h3 className="pname">
        {p.name}
        {p.shelved && <span className="pshelved"> · Shelved</span>}
      </h3>
      <div className="pcat">{p.cat}</div>
      <div className="phero">
        {p.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="phero-img" src={p.image} alt={p.name} />
        ) : (
          <div className="ht" />
        )}
        {p.label && <div className="label">{p.label}</div>}
      </div>
      <p className="pdesc">{p.desc}</p>
      {(p.tag || (p.link && p.href)) && (
        <div className="pbtm">
          <span className="ptag">{p.tag}</span>
          {p.link && p.href && <span className="plink">{p.link}</span>}
        </div>
      )}
    </>
  );
  const cls = `proj-card ${p.size} ${p.feature ? "feature" : ""} ${p.shelved ? "is-shelved" : ""}`;
  if (p.href) {
    return (
      <a
        className={cls}
        href={p.href}
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        {inner}
      </a>
    );
  }
  return <article className={cls}>{inner}</article>;
}

function SubHead({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="sub-head">
      <span className="sub-kicker">{kicker}</span>
      <h2 className="sub-title">{title}</h2>
      <span className="sub-rule" />
    </div>
  );
}

function ProjectsSection() {
  return (
    <section id="yearbook" data-screen-label="The Yearbook">
      <div className="exp-head">
        <h1 className="exp-title">
          The <em>Work</em>
          <br />
          So Far.
        </h1>
        <p className="exp-sub">
          A scrapbook of things I&apos;ve built, broken, abandoned, or stubbornly
          finished — software, hardware, and a few in between. Pictures coming soon.
        </p>
      </div>

      <SubHead kicker="★ On the bench right now" title="Current Projects" />
      <div className="proj-grid">
        {CURRENT_PROJECTS.map((p, i) => (
          <ProjectCard key={i} p={p} />
        ))}
      </div>

      <SubHead kicker="★ In the archive" title="Completed Projects" />
      <div className="proj-grid">
        {COMPLETED_PROJECTS.map((p, i) => (
          <ProjectCard key={i} p={p} />
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <span>shauryakapoor.com</span>
      <span>★ Spring 2026 Pressing ★</span>
      <span>Made by hand · Dublin</span>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="shell">
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
