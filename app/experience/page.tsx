"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Briefcase, GraduationCap, Languages, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExperienceItem {
  id: string;
  title: string;
  organization?: string;
  date: string;
  description: string;
  type: 'work' | 'education' | 'achievement';
}

const experiences: ExperienceItem[] = [
  {
    id: 'arcus-intern',
    title: 'AI development Intern',
    organization: 'Arcus innovation studios - 360 social impact studios',
    date: '2026 - present',
    description: 'Working as an AI development intern, contributing to innovative projects that combine artificial intelligence with social impact initiatives.',
    type: 'work',
  },
  {
    id: 'websummit-2025',
    title: 'Websummit 2025 Scholar',
    date: '2025',
    description: 'Selected for a prestigious programme that granted access to a Websummit chairperson ticket worth €25,000. This exclusive opportunity provides unparalleled access to global tech leaders and innovative startups.',
    type: 'achievement',
  },
  {
    id: 'engineering',
    title: 'Engineering',
    organization: 'University College Dublin',
    date: 'Sep 2025 - Jan 2026',
    description: 'Studied Engineering at one of Ireland\'s leading universities.',
    type: 'education',
  },
  {
    id: 'websummit-2023',
    title: 'Websummit',
    date: '2023',
    description: 'TY work experience - Explored multiple fields of work and different work styles in a week long programme.',
    type: 'work',
  },
  {
    id: 'unipol',
    title: 'Unipol RE',
    date: '2022',
    description: 'TY work experience - Learned technical and computing skills while shadowing and working along the IT team.',
    type: 'work',
  },
];

const languages = [
  { name: 'English', level: 'Fluent' },
  { name: 'Hindi', level: 'Fluent' },
  { name: 'German', level: 'B2 Level' },
];

const ACCENT = '#C25A1A';
const INK = '#1a1a1a';
const SERIF = '"Times New Roman", Times, serif';

const getIcon = (type: ExperienceItem['type']) => {
  switch (type) {
    case 'work':
      return <Briefcase className="w-5 h-5" />;
    case 'education':
      return <GraduationCap className="w-5 h-5" />;
    case 'achievement':
      return <Award className="w-5 h-5" />;
  }
};

export default function ExperiencePage() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#F2E8D5', fontFamily: SERIF, color: INK }}>
      <img
        src="/canvas/star-cloud.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none fixed select-none hidden md:block"
        style={{
          top: '50%',
          right: 24,
          width: '12rem',
          transform: 'translateY(-50%)',
          filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.15))',
          opacity: 0.9,
          zIndex: 0,
        }}
      />

      <main
        className="w-full px-4 md:px-8 pt-2 pb-16 relative"
        style={{ fontFamily: SERIF, color: INK, zIndex: 1 }}
      >
        <Link
          href="/"
          className="absolute top-6 left-4 md:left-8 inline-block transition-all hover:opacity-80"
          style={{
            fontFamily: SERIF,
            color: INK,
            backgroundColor: 'rgba(255,255,255,0.5)',
            border: `1px solid ${ACCENT}`,
            borderRadius: 999,
            padding: '6px 18px',
            fontSize: 15,
            fontWeight: 600,
            zIndex: 25,
          }}
        >
          ← Back
        </Link>

        <Link
          href="/projects"
          aria-label="View projects"
          className="hidden md:block absolute transition-transform hover:scale-105"
          style={{
            top: 24,
            right: -140,
            transform: 'rotate(15deg)',
            transformOrigin: 'top right',
            zIndex: 20,
          }}
        >
          <img
            src="/canvas/projects-tag.png"
            alt="Projects"
            className="w-[30rem] md:w-[36rem] lg:w-[42rem]"
            style={{ filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.2))' }}
          />
        </Link>

        <Link
          href="/projects"
          className="md:hidden absolute top-6 right-4 inline-block transition-all hover:opacity-80"
          style={{
            fontFamily: SERIF,
            color: INK,
            backgroundColor: 'rgba(255,255,255,0.5)',
            border: `1px solid ${ACCENT}`,
            borderRadius: 2,
            padding: '6px 14px',
            fontSize: 15,
            fontWeight: 600,
            zIndex: 25,
          }}
        >
          Projects →
        </Link>

        <div className="max-w-5xl mx-auto mt-4">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mt-20 md:mt-14 mb-6"
            style={{
              fontFamily: SERIF,
              color: INK,
              borderBottom: `3px solid ${ACCENT}`,
              paddingBottom: 12,
              display: 'inline-block',
            }}
          >
            Experience
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="lg:col-span-1 space-y-8">
              <section
                className="p-5 md:p-6"
                style={{
                  border: `1px solid ${ACCENT}55`,
                  backgroundColor: 'rgba(255,255,255,0.35)',
                  borderRadius: 2,
                }}
              >
                <div className="flex items-center gap-2 mb-4" style={{ color: ACCENT }}>
                  <Languages className="w-5 h-5" />
                  <h2 className="text-xl font-bold" style={{ color: INK }}>Languages</h2>
                </div>
                <div className="space-y-3">
                  {languages.map((lang, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="font-medium">{lang.name}</span>
                      <span className="text-sm" style={{ color: `${INK}aa` }}>{lang.level}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section
                className="p-5 md:p-6"
                style={{
                  border: `1px solid ${ACCENT}55`,
                  backgroundColor: 'rgba(255,255,255,0.35)',
                  borderRadius: 2,
                }}
              >
                <div className="flex items-center gap-2 mb-4" style={{ color: ACCENT }}>
                  <GraduationCap className="w-5 h-5" />
                  <h2 className="text-xl font-bold" style={{ color: INK }}>Education</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Engineering</h3>
                    <p className="text-sm" style={{ color: `${INK}aa` }}>University College Dublin</p>
                    <p className="text-xs mt-1" style={{ color: `${INK}88` }}>Sep 2025 - Jan 2026</p>
                  </div>
                  <div className="pt-2" style={{ borderTop: `1px solid ${ACCENT}33` }}>
                    <h3 className="font-semibold">Leaving Certificate</h3>
                    <p className="text-sm" style={{ color: `${INK}aa` }}>613 points</p>
                    <p className="text-sm" style={{ color: `${INK}aa` }}>The Institute of Education</p>
                    <p className="text-xs mt-1" style={{ color: `${INK}88` }}>2023 - 2025</p>
                  </div>
                </div>
              </section>
            </div>

            <div className="lg:col-span-2">
              <section
                className="p-5 md:p-8"
                style={{
                  border: `1px solid ${ACCENT}55`,
                  backgroundColor: 'rgba(255,255,255,0.35)',
                  borderRadius: 2,
                }}
              >
                <div className="flex items-center gap-2 mb-8" style={{ color: ACCENT }}>
                  <Briefcase className="w-6 h-6" />
                  <h2 className="text-2xl font-bold" style={{ color: INK }}>
                    Work Experience &amp; Achievements
                  </h2>
                </div>

                <div className="relative">
                  <div className="space-y-6">
                    {experiences.map((exp) => {
                      const isHovered = hoveredItem === exp.id;
                      return (
                        <div
                          key={exp.id}
                          className="relative pl-8 md:pl-12 group"
                          onMouseEnter={() => setHoveredItem(exp.id)}
                          onMouseLeave={() => setHoveredItem(null)}
                        >
                          <div
                            className="absolute left-2 top-2 w-3 h-3 rounded-full transition-all duration-300"
                            style={{
                              backgroundColor: ACCENT,
                              transform: isHovered ? 'scale(1.4)' : 'scale(1)',
                              boxShadow: isHovered ? `0 0 0 4px ${ACCENT}22` : 'none',
                            }}
                          />
                          <div
                            className={cn('p-4 transition-all duration-300')}
                            style={{
                              borderLeft: `2px solid ${isHovered ? ACCENT : `${ACCENT}55`}`,
                              backgroundColor: isHovered ? 'rgba(194, 90, 26, 0.06)' : 'transparent',
                              borderRadius: 2,
                            }}
                          >
                            <div className="flex items-start justify-between mb-2 gap-4">
                              <div className="flex items-center gap-2">
                                <div style={{ color: ACCENT }}>{getIcon(exp.type)}</div>
                                <h3
                                  className="text-lg font-bold transition-colors duration-300"
                                  style={{ color: isHovered ? ACCENT : INK }}
                                >
                                  {exp.title}
                                </h3>
                              </div>
                              <span
                                className="text-xs font-medium whitespace-nowrap"
                                style={{ color: `${INK}99` }}
                              >
                                {exp.date}
                              </span>
                            </div>
                            {exp.organization && (
                              <p className="text-sm mb-2 italic" style={{ color: `${INK}aa` }}>
                                {exp.organization}
                              </p>
                            )}
                            <p className="text-sm leading-relaxed" style={{ color: INK }}>
                              {exp.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
