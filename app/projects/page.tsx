"use client";

import React from 'react';
import { CategoryList, Category } from '@/components/ui/category-list';
import { ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/ui/mini-navbar';
import { InfiniteGridBackground } from '@/components/ui/infinite-grid-background';

const currentProjects: Category[] = [
  {
    id: 1,
    title: 'Eirspace',
    subtitle: 'Rocketry program where we build rockets to compete in EUROK. Yes, it really is rocket science!',
    technologies: ['Solidworks', 'Ansys', 'Open Rocket', 'Excel'],
    onClick: () => window.open('https://www.eirspace.org/about', '_blank'),
    icon: <ArrowRight className="w-8 h-8" />,
    featured: true,
  },
  {
    id: 2,
    title: 'UCDFS',
    subtitle: 'Working on a student F1 car for Formula Student competition, pushing the boundaries of automotive engineering.',
    technologies: ['Ansys', 'Onshape'],
    onClick: () => window.open('https://ucdfs.ie/home-1', '_blank'),
    icon: <ArrowRight className="w-8 h-8" />,
  },
  {
    id: 13,
    title: 'ExamEasy',
    subtitle: 'A Leaving cert exam question tutor that utilises AI to teach you every step of every problem.',
    technologies: ['React', 'Next.js', 'Python'],
  },
  {
    id: 14,
    title: 'Braile Project',
    subtitle: 'An interdisciplinary project that combines my knowledge working with AI agents with my knowledge of electronics and hardware.',
    technologies: ['Gemini', 'Python', 'Arduino', 'Solidworks'],
  },
];

const completedProjects: Category[] = [
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
    onClick: () => window.open('https://movinnitai.up.railway.app/', '_blank'),
    technologies: ['Next.js', 'Python'],
    icon: <ArrowRight className="w-8 h-8" />,
    featured: true,
  },
  {
    id: 5,
    title: 'Vex V5 Robotics',
    subtitle: 'Competed in Vex robotics as part of the Institute of Education robotics team, designing and building competitive robots.',
    technologies: ['Onshape', 'Solidworks'],
    onClick: () => window.open('https://www.vexrobotics.com/v5/competition/vrc-current-game', '_blank'),
    icon: <ArrowRight className="w-8 h-8" />,
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
    onClick: () => window.open('https://buildspace.so/s5/welcome', '_blank'),
    icon: <ArrowRight className="w-8 h-8" />,
  },
  {
    id: 10,
    title: 'TDI Challenge',
    subtitle: 'Designed and modeled a signing glove that helps deaf people learn sign language, combining technology with accessibility.',
    technologies: ['Solidworks'],
    onClick: () => window.open('https://www.mta.org.uk/resources/the-tdi-challenge/', '_blank'),
    icon: <ArrowRight className="w-8 h-8" />,
  },
  {
    id: 11,
    title: 'TEDI London Thinking Ahead Challenge',
    subtitle: 'Won most creative design award with Eco Lotus, a sustainable design solution that combines innovation with environmental consciousness.',
    technologies: ['Solidworks'],
    onClick: () => window.open('https://asu-london.ac.uk/study-with-us/thinking-ahead-taster-programme/', '_blank'),
    icon: <ArrowRight className="w-8 h-8" />,
  },
  {
    id: 12,
    title: 'V6 Engine',
    subtitle: 'Designed and modeled a complete V6 engine with guidance from Alex\'s Engineering on YouTube, mastering the intricate complexities of SolidWorks.',
    technologies: ['Solidworks'],
  },
];

export default function ProjectsPage() {
  return (
    <InfiniteGridBackground>
      <Navbar />
      <div className="pt-20 md:pt-24 pb-4 md:pb-12">
        <div className="mb-8">
          <CategoryList
            title="Current Projects"
            categories={currentProjects}
          />
        </div>
        <div className="mt-8">
          <CategoryList
            title="Completed Projects"
            categories={completedProjects}
          />
        </div>
      </div>
    </InfiniteGridBackground>
  );
}

