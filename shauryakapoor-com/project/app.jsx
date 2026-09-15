const { useState, useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "classic",
  "showFooter": true
} /*EDITMODE-END*/;

const THEME_OPTIONS = [
{ id: "classic", label: "Classic Cream", swatch: ["#f1e7d0", "#6b1f1f", "#d49a2a"] },
{ id: "marigold", label: "Marigold", swatch: ["#f6e0a4", "#883232", "#b07418"] },
{ id: "graduate", label: "Graduate Green", swatch: ["#e9e2cf", "#345334", "#b6863a"] },
{ id: "night", label: "After Hours", swatch: ["#1d150b", "#c75a3a", "#e3b04b"] }];


function smoothScrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 24;
  window.scrollTo({ top, behavior: "smooth" });
}

function Footer() {
  return (
    <footer className="footer">
      <span>shauryakapoor.com</span>
      <span>★ Spring 2026 Pressing ★</span>
      <span>Made by hand · Dublin</span>
    </footer>);

}

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    document.body.className = `theme-${tweaks.theme}`;
  }, [tweaks.theme]);

  return (
    <div className="shell">
      <AboutPage />
      <ExperiencePage />
      <ProjectsPage />

      {tweaks.showFooter && <Footer />}

      <TweaksPanel title="Tweaks">
        <TweakSection label="Palette">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {THEME_OPTIONS.map((t) =>
            <button
              key={t.id}
              onClick={() => setTweak("theme", t.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: 10,
                border: tweaks.theme === t.id ? "2px solid #111" : "1px solid #ccc",
                background: tweaks.theme === t.id ? "#f5f5f5" : "#fff",
                cursor: "pointer",
                textAlign: "left",
                fontSize: 13,
                borderRadius: 6
              }}>
              
                <span style={{ display: "flex" }}>
                  {t.swatch.map((c, i) =>
                <span key={i} style={{
                  width: 14, height: 22, background: c,
                  border: "1px solid rgba(0,0,0,0.15)",
                  marginLeft: i === 0 ? 0 : -1
                }} />
                )}
                </span>
                <span style={{ flex: 1 }}>{t.label}</span>
              </button>
            )}
          </div>
        </TweakSection>

        <TweakSection label="Chrome">
          <TweakToggle label="Show footer ribbon"
          value={tweaks.showFooter}
          onChange={(v) => setTweak("showFooter", v)} />
        </TweakSection>

        <TweakSection label="Jump to section">
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            <TweakButton label="ME!" onClick={() => smoothScrollTo("me")} />
            <TweakButton label="Work" onClick={() => smoothScrollTo("work")} />
            <TweakButton label="Yearbook" onClick={() => smoothScrollTo("yearbook")} />
          </div>
        </TweakSection>
      </TweaksPanel>
    </div>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);