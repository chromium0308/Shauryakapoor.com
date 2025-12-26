import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Accomplishments & Projects Tracker",
  description: "Track and showcase your accomplishments and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}

