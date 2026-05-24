import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shaurya Kapoor — shauryakapoor.com",
  description: "18 y/o builder · Websummit Scholar '25 · Eirspace",
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Ultra&family=Special+Elite&family=Permanent+Marker&family=DM+Serif+Display:ital@0;1&family=Alfa+Slab+One&display=swap"
        />
      </head>
      <body className="theme-classic">{children}</body>
    </html>
  );
}
