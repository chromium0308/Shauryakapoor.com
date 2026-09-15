const EXPERIENCE = [
{
  when: "2026 — Present",
  sub: "Internship · Dublin",
  role: "AI Development Intern",
  company: "Arcus Innovation Studios — 360 Social Impact Studios",
  desc: "Working as an AI development intern, contributing to innovative projects that combine artificial intelligence with social impact initiatives.",
  stamp: "Intern · 2026–",
  sub2: "Arcus · AI",
  featured: true
},
{
  when: "2025",
  sub: "Scholarship · Lisbon",
  role: "Web Summit 2025 Scholar",
  company: "Web Summit '25",
  desc: "Selected for a prestigious programme that granted access to a Web Summit chairperson ticket worth €25,000. The scholarship gives unparalleled access to global tech leaders and innovative startups.",
  stamp: "Scholar",
  sub2: "Chairperson Ticket"
},
{
  when: "Sep 2025 — Jan 2026",
  sub: "B.Eng · UCD",
  role: "Engineering",
  company: "University College Dublin",
  desc: "Studied Engineering at one of Ireland's leading universities, splitting time between coursework, the workshop, and whatever side-project was eating my evenings.",
  stamp: "Drop Out",
  sub2: "UCD · ’25–’26"
},
{
  when: "2023",
  sub: "TY Work Experience",
  role: "Web Summit",
  company: "Web Summit · Lisbon",
  desc: "TY work experience — explored multiple fields of work and different working styles across a week-long programme.",
  stamp: "TY · 2023",
  sub2: "Week-Long"
},
{
  when: "2022",
  sub: "TY Work Experience",
  role: "IT Intern",
  company: "Unipol RE",
  desc: "TY work experience — learned technical and computing skills while shadowing and working alongside the IT team.",
  stamp: "TY · 2022",
  sub2: "Shadowing · IT"
}];


const LANGUAGES = [
{ lang: "English", level: "Fluent" },
{ lang: "Hindi", level: "Fluent" },
{ lang: "German", level: "B2 Level" }];


const EDUCATION = [
{
  school: "University College Dublin",
  degree: "Engineering",
  when: "Sep 2025 — Jan 2026"
},
{
  school: "The Institute of Education",
  degree: "Leaving Certificate — 613 points",
  when: "2023 — 2025"
}];


function ExperienceCard({ item }) {
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
    </div>);

}

function ExperiencePage() {
  return (
    <section id="work" data-screen-label="The Work So Far">
      <div className="exp-head">
        <h1 className="exp-title">
          The <em>Yearbook.</em>
        </h1>
        <p className="exp-sub">
          A roughly-chronological transcript of teams I've been on, programmes
          I've gotten into, and benches I've spent too many hours at. Most
          recent up top.
        </p>
      </div>

      <div className="exp-list">
        {EXPERIENCE.map((item, i) =>
        <ExperienceCard key={i} item={item} />
        )}
      </div>

      <div className="extras">
        <div className="extras-card">
          <div className="extras-title">★ Education</div>
          <ul className="extras-list">
            {EDUCATION.map((e, i) =>
            <li key={i}>
                <div className="extras-row-head">
                  <span className="extras-row-school">{e.school}</span>
                  <span className="extras-row-when">{e.when}</span>
                </div>
                <div className="extras-row-degree">{e.degree}</div>
              </li>
            )}
          </ul>
        </div>

        <div className="extras-card">
          <div className="extras-title">★ Languages</div>
          <ul className="extras-list lang-list">
            {LANGUAGES.map((l, i) =>
            <li key={i}>
                <span className="extras-row-school">{l.lang}</span>
                <span className="extras-row-when">{l.level}</span>
              </li>
            )}
          </ul>
        </div>
      </div>

    </section>);

}

window.ExperiencePage = ExperiencePage;