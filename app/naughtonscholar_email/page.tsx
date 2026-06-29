import type { Metadata } from "next";

const PDF_NAME = "Gmail - Naughton scholar_Shaurya Kapoor_query.pdf";
const PDF_SRC = `/${encodeURIComponent(PDF_NAME)}`;

export const metadata: Metadata = {
  title: PDF_NAME,
  // Keep this route out of search engines / sitemaps — it's unlisted.
  robots: { index: false, follow: false },
};

export default function NaughtonScholarEmail() {
  return (
    <main style={{ position: "fixed", inset: 0, margin: 0 }}>
      <iframe
        src={PDF_SRC}
        title={PDF_NAME}
        style={{ width: "100%", height: "100%", border: "none" }}
      />
    </main>
  );
}
