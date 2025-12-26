"use client";

import { Project } from "@/types";
import { Calendar, Code, ExternalLink, Github, X, Edit } from "lucide-react";
import { useState } from "react";
import { ProjectForm } from "./ProjectForm";

interface ProjectCardProps {
  project: Project;
  onDelete: (id: string) => void;
  onUpdate: (project: Project) => void;
}

const statusColors = {
  completed: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
  "in-progress": "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
  planned: "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
};

export function ProjectCard({ project, onDelete, onUpdate }: ProjectCardProps) {
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    return (
      <ProjectForm
        project={project}
        onSave={(proj) => {
          onUpdate(proj);
          setIsEditing(false);
        }}
        onCancel={() => setIsEditing(false)}
      />
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
            {project.name}
          </h3>
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}
          >
            {project.status.replace("-", " ")}
          </span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setIsEditing(true)}
            className="p-1.5 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="Edit project"
          >
            <Edit size={18} />
          </button>
          <button
            onClick={() => onDelete(project.id)}
            className="p-1.5 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
            aria-label="Delete project"
          >
            <X size={18} />
          </button>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
        <div className="flex items-center gap-1">
          <Calendar size={16} />
          <span>
            {new Date(project.startDate).toLocaleDateString()}
            {project.endDate &&
              ` - ${new Date(project.endDate).toLocaleDateString()}`}
          </span>
        </div>
        {project.repository && (
          <a
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Github size={16} />
            <span>Repository</span>
          </a>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </a>
        )}
      </div>
      {project.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

