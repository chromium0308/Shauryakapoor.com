"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  subtitle?: string;
  technologies?: string[];
  href?: string;
  featured?: boolean;
  shelved?: boolean;
}

const currentProjects: Project[] = [
  {
    id: 1,
    title: 'Eirspace',
    subtitle: 'Rocketry program where we build rockets to compete in EUROK. Yes, it really is rocket science!',
    technologies: ['Solidworks', 'Ansys', 'Open Rocket', 'Excel'],
    href: 'https://www.eirspace.org/about',
    featured: true,
  },
  {
    id: 16,
    title: 'Zenemic',
    subtitle: 'An event planning assistance app that simplifies organising and managing events.',
    technologies: ['React Native', 'Expo', 'Swift'],
  },
  {
    id: 17,
    title: 'Vertically Deployed Drone',
    subtitle: 'A drone that deploys from a vertical surface where it docks to a charge using a magnetic hinge that\'s built into the dock.',
    technologies: ['Solidworks', 'Arduino'],
  },
];

const completedProjects: Project[] = [
  {
    id: 2,
    title: 'UCDFS',
    subtitle: 'Working on a student F1 car for Formula Student competition, pushing the boundaries of automotive engineering.',
    technologies: ['Ansys', 'Onshape'],
    href: 'https://ucdfs.ie/home-1',
  },
  {
    id: 13,
    title: 'ExamEasy',
    subtitle: 'A Leaving cert exam question tutor that utilises AI to teach you every step of every problem.',
    technologies: ['React', 'Next.js', 'Python'],
    href: 'https://Exameasy.ie',
  },
  {
    id: 14,
    title: 'Braille Reader',
    subtitle: 'A React Native and Expo app for learning Braille, supported by hardware prototypes built with Arduino and Solidworks for tactile feedback.',
    technologies: ['React Native', 'Expo', 'Gemini'],
  },
  {
    id: 15,
    title: 'Ventria',
    subtitle: 'HIPAA-secured heart monitoring app with Apple Watch sync—heart rate, HRV, steps, sleep, and AI-powered heart failure risk insights.',
    technologies: ['Xcode', 'Swift'],
    href: 'https://medathon-production.up.railway.app/',
  },
  {
    id: 3,
    title: 'Solid Works IDE',
    subtitle: 'A cloud-based IDE that transforms SolidWorks files into STEP format, enabling seamless editing and collaboration in the cloud.',
    technologies: ['Next.js', 'Python', 'Solidworks API'],
    shelved: true,
  },
  {
    id: 4,
    title: 'Movinnit.ai',
    subtitle: 'An AI-powered web platform that simplifies international relocation by handling all the complex paperwork and documentation requirements.',
    href: 'https://movinnitai.up.railway.app/',
    technologies: ['Next.js', 'Python'],
    featured: true,
  },
  {
    id: 5,
    title: 'Vex V5 Robotics',
    subtitle: 'Competed in Vex robotics as part of the Institute of Education robotics team, designing and building competitive robots.',
    technologies: ['Onshape', 'Solidworks'],
    href: 'https://www.vexrobotics.com/v5/competition/vrc-current-game',
  },
  {
    id: 6,
    title: 'Senior Maths Olympiad',
    subtitle: 'Participated in the prestigious Irish Mathematical Olympiad (IrMO) from UCD, showcasing advanced problem-solving skills.',
    technologies: [],
  },
  {
    id: 7,
    title: 'Model Jet Engine',
    subtitle: 'Built a partially functional jet engine from hairdryer scrap parts, exploring fundamental physics and engineering principles through hands-on experimentation.',
    technologies: ['Solidworks'],
  },
  {
    id: 8,
    title: 'Dukes Schools Competition',
    subtitle: 'Winner of best engineered solution at the annual Dukes Schools Engineering competition, representing The Institute of Education internationally in London.',
    technologies: [],
  },
  {
    id: 9,
    title: 'Build Space Nights and Weekends S5',
    subtitle: 'Conceptualized an innovative energy-generating speed breaker design that harnesses kinetic energy from vehicles.',
    technologies: [],
    href: 'https://buildspace.so/s5/welcome',
  },
  {
    id: 10,
    title: 'TDI Challenge',
    subtitle: 'Designed and modeled a signing glove that helps deaf people learn sign language, combining technology with accessibility.',
    technologies: ['Solidworks'],
    href: 'https://www.mta.org.uk/resources/the-tdi-challenge/',
  },
  {
    id: 11,
    title: 'TEDI London Thinking Ahead Challenge',
    subtitle: 'Won most creative design award with Eco Lotus, a sustainable design solution that combines innovation with environmental consciousness.',
    technologies: ['Solidworks'],
    href: 'https://asu-london.ac.uk/study-with-us/thinking-ahead-taster-programme/',
  },
  {
    id: 12,
    title: 'V6 Engine',
    subtitle: 'Designed and modeled a complete V6 engine with guidance from Alex\'s Engineering on YouTube, mastering the intricate complexities of SolidWorks.',
    technologies: ['Solidworks'],
  },
];

const ACCENT = '#C25A1A';
const INK = '#1a1a1a';
const SERIF = '"Times New Roman", Times, serif';

function ProjectRow({ p }: { p: Project }) {
  const [hover, setHover] = useState(false);
  const Wrapper: React.ElementType = p.href && !p.shelved ? 'a' : 'div';
  const wrapperProps = p.href && !p.shelved
    ? { href: p.href, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  const active = hover && !p.shelved;

  return (
    <Wrapper
      {...wrapperProps}
      className="block relative no-underline"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        cursor: p.shelved ? 'not-allowed' : p.href ? 'pointer' : 'default',
        opacity: p.shelved ? 0.55 : 1,
      }}
    >
      <div
        className="relative transition-all duration-300 px-6 md:px-8 py-5"
        style={{
          borderTop: `1px solid ${ACCENT}40`,
          borderBottom: active ? `1px solid ${ACCENT}` : `1px solid transparent`,
          backgroundColor: active ? 'rgba(194, 90, 26, 0.06)' : 'transparent',
          fontFamily: SERIF,
        }}
      >
        {p.technologies && p.technologies.length > 0 && (
          <div className="hidden md:flex absolute top-3 right-5 flex-wrap gap-1.5 max-w-[45%] justify-end">
            {p.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 text-[11px] font-medium"
                style={{
                  border: `1px solid ${ACCENT}66`,
                  color: INK,
                  backgroundColor: 'rgba(255,255,255,0.45)',
                  borderRadius: 2,
                  fontFamily: SERIF,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 pr-2">
            <div className="flex items-center gap-3">
              <h3
                className={p.featured ? 'text-2xl md:text-3xl font-bold' : 'text-xl md:text-2xl font-bold'}
                style={{
                  color: p.shelved ? `${INK}77` : active ? ACCENT : INK,
                  transition: 'color 0.3s ease',
                }}
              >
                {p.title}
              </h3>
              {p.shelved && (
                <span
                  className="px-2 py-0.5 text-xs font-medium italic"
                  style={{
                    border: `1px solid ${INK}55`,
                    color: `${INK}88`,
                    borderRadius: 2,
                  }}
                >
                  Shelved
                </span>
              )}
            </div>
            {p.subtitle && (
              <p
                className="hidden md:block mt-1.5 text-sm md:text-base leading-relaxed"
                style={{ color: active ? INK : `${INK}bb` }}
              >
                {p.subtitle}
              </p>
            )}
          </div>

          {p.href && !p.shelved && (
            <div
              className="transition-all duration-300 shrink-0"
              style={{
                color: ACCENT,
                opacity: active ? 1 : 0.35,
                transform: active ? 'translateX(4px)' : 'translateX(0)',
              }}
            >
              <ArrowRight className="w-6 h-6" />
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

function Section({ title, items }: { title: string; items: Project[] }) {
  return (
    <section className="max-w-4xl mx-auto px-4 md:px-8 mt-10">
      <h2
        className="text-3xl md:text-4xl font-bold mb-6 tracking-tight"
        style={{ color: INK, fontFamily: SERIF, borderBottom: `2px solid ${ACCENT}`, paddingBottom: 8, display: 'inline-block' }}
      >
        {title}
      </h2>
      <div style={{ borderBottom: `1px solid ${ACCENT}40` }}>
        {items.map((p) => (
          <ProjectRow key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <div
      className="min-h-screen relative"
      style={{ backgroundColor: '#F2E8D5', fontFamily: SERIF, color: INK }}
    >
      <img
        src="/canvas/paper-tear-corner.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute select-none"
        style={{
          top: '-1%',
          left: '-12%',
          width: '55%',
          maxWidth: 720,
          transform: 'rotate(-35deg)',
          transformOrigin: 'top left',
          filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.14))',
          opacity: 0.9,
          zIndex: 0,
        }}
      />

      <img
        src="/canvas/paper-tear-corner.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute select-none"
        style={{
          top: '-4%',
          right: '-12%',
          width: '50%',
          maxWidth: 700,
          transform: 'rotate(55deg) scaleX(-1)',
          transformOrigin: 'top right',
          filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.12))',
          opacity: 0.85,
          zIndex: 0,
        }}
      />

      <main className="w-full px-8 pt-2 pb-20 relative" style={{ fontFamily: SERIF, color: INK, zIndex: 1 }}>
        <Link
          href="/"
          className="absolute top-6 left-8 text-lg underline hover:opacity-70 transition-opacity"
          style={{ fontFamily: SERIF, color: INK, zIndex: 25 }}
        >
          ← Back
        </Link>

        <Link
          href="/experience"
          aria-label="View experience"
          className="absolute transition-transform hover:scale-105"
          style={{
            top: 24,
            right: -10,
            transform: 'rotate(0deg)',
            zIndex: 20,
          }}
        >
          <img
            src="/canvas/experience-tag.png"
            alt="Experience"
            className="w-[26rem] md:w-[30rem] lg:w-[34rem]"
            style={{ filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.2))' }}
          />
        </Link>

        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mt-8 mb-4 ml-16 md:ml-32 lg:ml-48"
          style={{
            fontFamily: SERIF,
            color: INK,
            borderBottom: `3px solid ${ACCENT}`,
            paddingBottom: 12,
            display: 'inline-block',
          }}
        >
          Projects
        </h1>

        <Section title="Current Projects" items={currentProjects} />
        <Section title="Completed Projects" items={completedProjects} />
      </main>
    </div>
  );
}
