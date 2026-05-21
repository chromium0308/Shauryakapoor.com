"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

const XIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.244 2H21.5l-7.5 8.567L23 22h-6.844l-5.36-6.99L4.6 22H1.34l8.02-9.16L1 2h7.02l4.84 6.39L18.244 2zm-2.4 18h1.86L7.27 4H5.27l10.575 16z" />
  </svg>
);

const TOP_OFFSET = 114;
const SCROLL_RANGE = 1200;

export default function Home() {
  const router = useRouter();
  const experienceRef = useRef<HTMLAnchorElement>(null);
  const [progress, setProgress] = useState(0);
  const [origin, setOrigin] = useState({ x: 0.7, y: 0.5 });
  const navigatedRef = useRef(false);

  useEffect(() => {
    const updateOrigin = () => {
      const el = experienceRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width * 0.75;
      const cy = rect.top + rect.height / 2;
      setOrigin({ x: cx, y: cy });
    };

    const onScroll = () => {
      const p = Math.min(1, Math.max(0, window.scrollY / SCROLL_RANGE));
      setProgress(p);
      if (p >= 0.45 && !navigatedRef.current) {
        navigatedRef.current = true;
        router.push("/experience");
      }
    };

    requestAnimationFrame(updateOrigin);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateOrigin);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateOrigin);
    };
  }, [router]);

  const scale = 1 + progress * 8;
  const othersOpacity = Math.max(0, 1 - progress * 3);

  return (
    <>
      <div style={{ height: SCROLL_RANGE + 800 }} aria-hidden="true" />

      <div
        className="fixed inset-0 overflow-hidden"
        style={{ backgroundColor: "#F2E8D5" }}
      >
        <main
          className="w-full h-full relative"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: `${origin.x}px ${origin.y}px`,
            willChange: "transform",
          }}
        >
          <img
            src="/canvas/paper-tear-corner.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute select-none"
            style={{
              top: "calc(-5% + 60px)",
              left: "calc(-15% - 50px)",
              width: "70%",
              maxWidth: 900,
              transform: "rotate(-35deg)",
              transformOrigin: "top left",
              filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.18))",
              opacity: othersOpacity,
            }}
          />
          <div style={{ height: TOP_OFFSET }} aria-hidden="true" />

          <div
            className="w-full items-center gap-6 pl-20 pr-6 sm:gap-10 sm:pl-24 md:pl-32 md:pr-12 lg:pl-44 flex flex-row"
            style={{ marginTop: -8 }}
          >
            <img
              src="/canvas/New Project (10).png"
              alt=""
              className="w-56 shrink-0 sm:w-72 md:w-96 lg:w-[28rem]"
              style={{
                filter: "drop-shadow(0 8px 20px rgba(0,0,0,0.18))",
                opacity: othersOpacity,
              }}
              width={400}
              height={640}
            />

            <div
              style={{
                fontFamily: '"Times New Roman", Times, serif',
                color: "#1a1a1a",
                transform: "translateY(40px)",
                opacity: othersOpacity,
              }}
            >
              <h1
                className="m-0"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: 64,
                  lineHeight: 1.1,
                  fontWeight: 700,
                }}
              >
                Shaurya
                <br />
                <span style={{ color: "#C25A1A" }}>Kapoor</span>
              </h1>
              <p
                className="m-0"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  fontSize: 20,
                  fontWeight: 600,
                  marginTop: 24,
                }}
              >
                18 year old builder | Websummit Scholar &apos;25 | Eirspace
              </p>
              <div
                className="flex flex-row items-center justify-start gap-5"
                style={{ marginTop: 20, color: "#C25A1A" }}
              >
                <a
                  href="mailto:shaurya@kapoor.ie"
                  aria-label="Email"
                  className="transition-opacity hover:opacity-60"
                >
                  <Mail size={26} strokeWidth={1.75} />
                </a>
                <a
                  href="https://www.linkedin.com/in/shaurya-kapoor-99ba292b7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="transition-opacity hover:opacity-60"
                >
                  <Linkedin size={26} strokeWidth={1.75} />
                </a>
                <a
                  href="https://x.com/_chromium_0308"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="transition-opacity hover:opacity-60"
                >
                  <XIcon size={22} />
                </a>
                <a
                  href="https://www.instagram.com/shauryak_0308/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="transition-opacity hover:opacity-60"
                >
                  <Instagram size={26} strokeWidth={1.75} />
                </a>
                <a
                  href="https://github.com/chromium0308"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="transition-opacity hover:opacity-60"
                >
                  <Github size={26} strokeWidth={1.75} />
                </a>
              </div>
            </div>

            <Link
              href="/projects"
              aria-label="View projects"
              className="absolute transition-transform hover:scale-105"
              style={{
                top: 24,
                right: 172,
                transform: "rotate(15deg)",
                zIndex: 20,
                opacity: othersOpacity,
              }}
            >
              <img
                src="/canvas/projects-tag.png"
                alt="Projects"
                className="w-[30rem] md:w-[36rem] lg:w-[42rem]"
                style={{ filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.2))" }}
              />
            </Link>

            <Link
              ref={experienceRef}
              href="/experience"
              aria-label="View experience"
              className="absolute transition-transform hover:scale-105"
              style={{
                top: 230,
                right: -10,
                transform: "rotate(0deg)",
                zIndex: 20,
              }}
            >
              <img
                src="/canvas/experience-tag.png"
                alt="Experience"
                className="w-[26rem] md:w-[30rem] lg:w-[34rem]"
                style={{ filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.2))" }}
              />
            </Link>
          </div>
          <img
            src="/canvas/shooting-star.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute select-none"
            style={{
              top: 40,
              right: 60,
              width: "14rem",
              transform: "rotate(-25deg)",
              filter: "drop-shadow(0 6px 14px rgba(0,0,0,0.18))",
              opacity: othersOpacity,
              zIndex: 15,
            }}
          />

          <img
            src="/canvas/paper-tear-bottom.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-0 select-none z-10"
            style={{
              bottom: -400,
              width: "100%",
              height: "auto",
              transform: "scale(-1, -1)",
              filter: "drop-shadow(0 -10px 20px rgba(0,0,0,0.18))",
              opacity: othersOpacity,
            }}
          />

          <img
            src="/canvas/multi-star.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute select-none"
            style={{
              bottom: 24,
              left: 24,
              width: "18rem",
              filter: "drop-shadow(0 6px 14px rgba(0,0,0,0.18))",
              opacity: othersOpacity,
              zIndex: 15,
            }}
          />
        </main>
      </div>
    </>
  );
}
