"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const AnimatedNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const textSizeClass = 'text-sm';

  return (
    <Link 
      href={href} 
      className={`group relative inline-block flex items-center ${textSizeClass} text-gray-300 transition-all duration-300 hover:text-white`}
      style={{
        textShadow: '0 0 0px currentColor',
        transition: 'text-shadow 0.3s ease, color 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.textShadow = '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.textShadow = '0 0 0px currentColor';
      }}
    >
      {children}
    </Link>
  );
};

export function Navbar() {
  const [headerShapeClass] = useState('rounded-full');

  const navLinksData = [
    { label: 'About', href: '/' },
    { label: 'Experience', href: '/experience' },
    { label: 'Projects', href: '/projects' },
  ];

  return (
    <header className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-20
                       flex flex-col items-center
                       pl-6 pr-6 py-3 backdrop-blur-sm
                       ${headerShapeClass}
                       border border-[#333] bg-[#1f1f1f57]
                       w-[calc(100%-2rem)] sm:w-auto
                       transition-[border-radius] duration-0 ease-in-out`}>

      <div className="flex items-center justify-center w-full gap-x-6 sm:gap-x-8">
        <nav className="flex items-center space-x-4 sm:space-x-6 text-sm">
          {navLinksData.map((link) => (
            <AnimatedNavLink key={link.href} href={link.href}>
              {link.label}
            </AnimatedNavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

