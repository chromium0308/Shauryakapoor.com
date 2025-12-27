"use client";
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

// Define the type for a single category item
export interface Category {
  id: string | number;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  featured?: boolean;
  technologies?: string[];
}

// Define the props for the CategoryList component
export interface CategoryListProps {
  title: string;
  subtitle?: string;
  categories: Category[];
  headerIcon?: React.ReactNode;
  className?: string;
}

export const CategoryList = ({
  title,
  subtitle,
  categories,
  headerIcon,
  className,
}: CategoryListProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | number | null>(null);

  return (
    <div className={cn("w-full bg-background text-foreground p-8", className)}>
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          {headerIcon && (
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/80 to-primary mb-6 text-primary-foreground">
              {headerIcon}
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">{title}</h1>
          {subtitle && (
            <h2 className="text-4xl md:text-5xl font-bold text-muted-foreground">{subtitle}</h2>
          )}
        </div>

        {/* Categories List */}
        <div className="space-y-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative group"
              onMouseEnter={() => setHoveredItem(category.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={category.onClick}
            >
              <div
                className={cn(
                  "relative overflow-hidden border bg-card transition-all duration-300 ease-in-out cursor-pointer",
                  // Hover state styles
                  hoveredItem === category.id
                    ? 'h-32 border-primary shadow-lg shadow-primary/20 bg-primary/5'
                    : 'h-24 border-border hover:border-primary/50'
                )}
              >
                {/* Corner brackets that appear on hover */}
                {hoveredItem === category.id && (
                  <>
                    <div className="absolute top-3 left-3 w-6 h-6">
                      <div className="absolute top-0 left-0 w-4 h-0.5 bg-primary" />
                      <div className="absolute top-0 left-0 w-0.5 h-4 bg-primary" />
                    </div>
                    <div className="absolute bottom-3 right-3 w-6 h-6">
                      <div className="absolute bottom-0 right-0 w-4 h-0.5 bg-primary" />
                      <div className="absolute bottom-0 right-0 w-0.5 h-4 bg-primary" />
                    </div>
                  </>
                )}

                {/* Technology Tags in Corner - Hidden on mobile */}
                {category.technologies && category.technologies.length > 0 && (
                  <div className="hidden md:flex absolute top-2 right-2 flex-wrap gap-1 max-w-[40%] justify-end z-10">
                    {category.technologies.map((tech, idx) => {
                      // Define CAD platforms
                      const cadPlatforms = ['Solidworks', 'Ansys', 'Onshape', 'Open Rocket', 'Excel'];
                      const isCAD = cadPlatforms.some(cad => tech.toLowerCase().includes(cad.toLowerCase()));
                      
                      return (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-[10px] md:text-xs font-medium bg-gray-600/80 text-white border border-gray-500/50 rounded-md backdrop-blur-sm flex items-center gap-1.5"
                        >
                          <span
                            className={cn(
                              "w-1.5 h-1.5 rounded-full",
                              isCAD ? "bg-red-500" : "bg-blue-500"
                            )}
                          />
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                )}

                {/* Content */}
                <div className="flex items-center justify-between h-full px-6 md:px-8">
                  <div className="flex-1 pr-2">
                    <h3
                      className={cn(
                        "font-bold transition-all duration-300",
                        category.featured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl',
                        hoveredItem === category.id ? 'text-primary' : 'text-foreground'
                      )}
                      style={{
                        textShadow: hoveredItem === category.id 
                          ? '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor'
                          : 'none',
                        transition: 'text-shadow 0.3s ease, color 0.3s ease'
                      }}
                    >
                      {category.title}
                    </h3>
                    {category.subtitle && (
                      <p
                        className={cn(
                          "hidden md:block mt-1 transition-all duration-300 text-sm md:text-base",
                           hoveredItem === category.id ? 'text-foreground/90' : 'text-muted-foreground'
                        )}
                        style={{
                          textShadow: hoveredItem === category.id 
                            ? '0 0 8px currentColor, 0 0 16px currentColor'
                            : 'none',
                          transition: 'text-shadow 0.3s ease, color 0.3s ease'
                        }}
                      >
                        {category.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Icon appears on the right on hover */}
                  {category.icon && hoveredItem === category.id && (
                    <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {category.icon}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

