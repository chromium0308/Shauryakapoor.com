"use client";

import React from 'react';
import { Navbar } from './mini-navbar';
import { Mail, Linkedin, Instagram, Github } from 'lucide-react';
import { InfiniteGridBackground } from './infinite-grid-background';
import { EducationCard } from './education-card';

const InfiniteGridPage: React.FC = () => {
  return (
    <InfiniteGridBackground className="flex flex-col items-center justify-center relative">
      {/* Navbar */}
      <Navbar />

      {/* Main Content - Moved up a bit */}
      <div className="flex flex-col items-center justify-center text-center px-4 max-w-3xl mx-auto space-y-6 flex-1 pt-8">
        <div className="space-y-6 w-full flex flex-col items-center pointer-events-none">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tight text-foreground drop-shadow-sm w-[80%] text-center mx-auto" style={{ transform: 'translateX(-27px)' }}>
            Welcome!
          </h1>
          <p className="text-lg md:text-xl font-medium text-muted-foreground w-full text-center mx-auto">
            I&apos;m Shaurya an Engineering student who loves to fabricate his ideas
          </p>
        </div>
        
        {/* Social Media Links */}
        <div className="flex items-center justify-center gap-6 pointer-events-auto">
          <a
            href="mailto:Shauryakapoor0308@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300 hover:scale-110"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/shaurya-kapoor-99ba292b7/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://x.com/_chromium_0308"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300 hover:scale-110"
            aria-label="X"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/shauryak_0308/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300 hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://github.com/chromium0308"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
        </div>

        {/* Location and Education Cards - Under Social Icons */}
        <div className="pointer-events-auto mt-6 flex items-center justify-center gap-4 flex-wrap">
          <EducationCard 
            title="Dublin Ireland"
            subtitle=""
          />
          <EducationCard 
            title="Engineering student"
            subtitle="University College Dublin"
          />
        </div>
      </div>
    </InfiniteGridBackground>
  );
};

export default InfiniteGridPage;

