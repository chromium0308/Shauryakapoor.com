"use client";

import React, { useState } from 'react';
import { Navbar } from '@/components/ui/mini-navbar';
import { InfiniteGridBackground } from '@/components/ui/infinite-grid-background';
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
    id: 'websummit-2025',
    title: 'Websummit 2025 Scholar',
    date: '2025',
    description: 'Selected for a prestigious programme that granted access to a Websummit chairperson ticket worth €25,000. This exclusive opportunity provides unparalleled access to global tech leaders and innovative startups.',
    type: 'achievement',
  },
  {
    id: 'achievements',
    title: 'Achievements',
    date: '2023 - PRESENT',
    description: 'Winner of most creative design - TEDI London thinking ahead 2023 | Winner of best Engineered - Dukes schools competition 2024 | Selected to take part in the IrMO (Irish Mathematical Olympiad)',
    type: 'achievement',
  },
  {
    id: 'engineering',
    title: 'Engineering',
    organization: 'University College Dublin',
    date: '2025 - present',
    description: 'Pursuing Engineering degree at one of Ireland\'s leading universities.',
    type: 'education',
  },
  {
    id: 'leaving-cert',
    title: 'Leaving Certificate - 613 points',
    organization: 'The Institute of Education',
    date: '2023 - 2025',
    description: 'Achieved exceptional results in the Leaving Certificate examinations.',
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

  // Get color based on experience type
  const getTimelineColor = (type: 'work' | 'education' | 'achievement') => {
    switch (type) {
      case 'work':
        return 'rgb(59, 130, 246)'; // blue-500
      case 'education':
        return 'rgb(34, 197, 94)'; // green-500
      case 'achievement':
        return 'rgb(234, 179, 8)'; // yellow-500
    }
  };

  return (
    <InfiniteGridBackground>
      <Navbar />
      <div className="pt-20 md:pt-24 pb-4 md:pb-12 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">Experience</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Languages & Education Summary */}
            <div className="lg:col-span-1 space-y-8">
              {/* Languages */}
              <div className="bg-transparent rounded-lg p-6 border border-border/30">
                <div className="flex items-center gap-2 mb-4">
                  <Languages className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-bold">Languages</h2>
                </div>
                <div className="space-y-3">
                  {languages.map((lang, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-foreground font-medium">{lang.name}</span>
                      <span className="text-muted-foreground text-sm">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Summary */}
              <div className="bg-transparent rounded-lg p-6 border border-border/30">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-bold">Education</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground">Engineering</h3>
                    <p className="text-sm text-muted-foreground">University College Dublin</p>
                    <p className="text-xs text-muted-foreground mt-1">2025 - present</p>
                  </div>
                  <div className="pt-2 border-t border-border/50">
                    <h3 className="font-semibold text-foreground">Leaving Certificate</h3>
                    <p className="text-sm text-muted-foreground">613 points</p>
                    <p className="text-sm text-muted-foreground">The Institute of Education</p>
                    <p className="text-xs text-muted-foreground mt-1">2023 - 2025</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Timeline */}
            <div className="lg:col-span-2">
              <div className="bg-transparent rounded-lg p-6 md:p-8 border border-border/30">
                <div className="flex items-center gap-2 mb-8">
                  <Briefcase className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">Work Experience & Achievements</h2>
                </div>

                {/* Timeline */}
                <div className="relative">
                  <div className="space-y-8">
                    {experiences.map((exp, idx) => {
                      const isHovered = hoveredItem === exp.id;
                      const dotColor = getTimelineColor(exp.type);
                      
                      return (
                        <div 
                          key={exp.id} 
                          className="relative pl-16 group"
                          onMouseEnter={() => setHoveredItem(exp.id)}
                          onMouseLeave={() => setHoveredItem(null)}
                        >
                          {/* Timeline Dot */}
                          <div 
                            className="absolute left-4 top-1 w-4 h-4 rounded-full border-2 border-background flex items-center justify-center z-10 transition-all duration-300"
                            style={{
                              backgroundColor: isHovered ? dotColor : dotColor,
                              borderColor: isHovered ? dotColor : dotColor,
                              boxShadow: isHovered ? `0 0 15px ${dotColor}, 0 0 30px ${dotColor}` : 'none',
                              transform: isHovered ? 'scale(1.3)' : 'scale(1)',
                            }}
                          >
                            <div className="w-2 h-2 rounded-full bg-background" />
                          </div>

                          {/* Content */}
                          <div 
                            className={cn(
                              "bg-transparent rounded-lg p-4 transition-all duration-300 border border-border/20",
                              isHovered && "bg-background/20 border-border/40"
                            )}
                            style={{
                              boxShadow: isHovered 
                                ? `0 0 20px ${dotColor}40, 0 0 40px ${dotColor}30, 0 0 60px ${dotColor}20`
                                : 'none',
                              border: isHovered ? `1px solid ${dotColor}60` : '1px solid transparent',
                            }}
                          >
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <div 
                                  className="transition-colors duration-300"
                                  style={{
                                    color: isHovered ? dotColor : dotColor,
                                  }}
                                >
                                  {getIcon(exp.type)}
                                </div>
                                <h3 
                                  className="text-lg font-bold text-foreground transition-all duration-300"
                                  style={{
                                    textShadow: isHovered 
                                      ? `0 0 10px ${dotColor}, 0 0 20px ${dotColor}, 0 0 30px ${dotColor}`
                                      : 'none',
                                    color: isHovered ? dotColor : 'inherit',
                                  }}
                                >
                                  {exp.title}
                                </h3>
                              </div>
                              <span className="text-xs text-muted-foreground font-medium">{exp.date}</span>
                            </div>
                            {exp.organization && (
                              <p className="text-sm text-muted-foreground mb-2">{exp.organization}</p>
                            )}
                            <p 
                              className="text-sm text-foreground/90 leading-relaxed transition-all duration-300"
                              style={{
                                textShadow: isHovered 
                                  ? `0 0 8px ${dotColor}80, 0 0 16px ${dotColor}60`
                                  : 'none',
                              }}
                            >
                              {exp.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </InfiniteGridBackground>
  );
}

