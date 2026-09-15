const CURRENT_PROJECTS = [
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
    image: "assets/eirspace.png",
    label: "Eirspace · signed rocket fin"
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
    image: "assets/zenemic.png",
    label: "Zenemic · iOS"
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
    image: "assets/vdd.png",
    label: "VDD · concept sketch"
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
    image: "assets/train-cart.png",
    label: "Cart · workshop progress"
  }
];

const COMPLETED_PROJECTS = [
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
    image: "assets/ucdfs.png",
    label: "UCDFS · Silverstone, E135"
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
    image: "assets/exameasy.png",
    label: "ExamEasy · all subjects"
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
    image: "assets/braille.png",
    label: "Braille Reader · prototype"
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
    image: "assets/ventria.jpg",
    label: "Medathon · 27 Feb 2026"
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
    image: "assets/solidworks.png",
    label: "SolidWorks · IDE"
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
    image: "assets/movinnit.png",
    label: "Movinnit.ai"
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
    image: "assets/vex-v5.png"
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
    image: "assets/jet-engine.png",
    label: "Jet engine v1 · scrap-built"
  },
  {
    n: "13",
    year: "2023",
    name: "Dukes Schools Competition",
    cat: "Best Engineered Solution",
    desc: "Winner of best engineered solution at the annual Dukes Schools Engineering competition, representing The Institute of Education internationally in London.",
    tag: "",
    link: "",
    size: "s-3",
    image: "assets/dukes.png",
    label: "Dukes · winners' stage"
  },
  {
    n: "14",
    year: "2024",
    name: "Build Space S5",
    cat: "Nights & Weekends",
    desc: "Conceptualized an innovative energy-generating speed breaker design that harnesses kinetic energy from vehicles.",
    tag: "",
    link: "buildspace →",
    href: "https://buildspace.so/s5/welcome",
    size: "s-3",
    image: "assets/buildspace.png",
    label: "Buildspace · S5"
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
    image: "assets/signing-glove.png",
    label: "Signing glove · CAD"
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
    image: "assets/eco-lotus.png"
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
    image: "assets/v6-engine.png",
    label: "V6 · wireframe render"
  }
];

function ProjectCard({ p }) {
  const inner = (
    <>
      <span className="pn">No. {p.n}</span>
      <div className="pyr">{p.year}</div>
      <h3 className="pname">{p.name}{p.shelved && <span className="pshelved"> · Shelved</span>}</h3>
      <div className="pcat">{p.cat}</div>
      <div className="phero">
        {p.image
          ? <img className="phero-img" src={p.image} alt={p.name} />
          : <div className="ht" />}
        {p.label && <div className="label">{p.label}</div>}
      </div>
      <p className="pdesc">{p.desc}</p>
      {(p.tag || p.link) && (
        <div className="pbtm">
          <span className="ptag">{p.tag}</span>
          <span className="plink">{p.link}</span>
        </div>
      )}
    </>
  );
  const cls = `proj-card ${p.size} ${p.feature ? "feature" : ""} ${p.shelved ? "is-shelved" : ""}`;
  if (p.href) {
    return (
      <a className={cls} href={p.href} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
        {inner}
      </a>
    );
  }
  return <article className={cls}>{inner}</article>;
}

function SubHead({ kicker, title }) {
  return (
    <div className="sub-head">
      <span className="sub-kicker">{kicker}</span>
      <h2 className="sub-title">{title}</h2>
      <span className="sub-rule" />
    </div>
  );
}

function ProjectsPage() {
  return (
    <section id="yearbook" data-screen-label="The Yearbook">
      <div className="exp-head">
        <h1 className="exp-title">
          The <em>Work</em><br />
          So Far.
        </h1>
        <p className="exp-sub">
          A scrapbook of things I've built, broken, abandoned, or stubbornly
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

window.ProjectsPage = ProjectsPage;
