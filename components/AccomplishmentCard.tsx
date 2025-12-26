"use client";

import { Accomplishment } from "@/types";
import { Calendar, Tag, X, Edit } from "lucide-react";
import { useState } from "react";
import { AccomplishmentForm } from "./AccomplishmentForm";

interface AccomplishmentCardProps {
  accomplishment: Accomplishment;
  onDelete: (id: string) => void;
  onUpdate: (accomplishment: Accomplishment) => void;
}

export function AccomplishmentCard({
  accomplishment,
  onDelete,
  onUpdate,
}: AccomplishmentCardProps) {
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    return (
      <AccomplishmentForm
        accomplishment={accomplishment}
        onSave={(acc) => {
          onUpdate(acc);
          setIsEditing(false);
        }}
        onCancel={() => setIsEditing(false)}
      />
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {accomplishment.title}
        </h3>
        <div className="flex gap-2">
          <button
            onClick={() => setIsEditing(true)}
            className="p-1.5 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="Edit accomplishment"
          >
            <Edit size={18} />
          </button>
          <button
            onClick={() => onDelete(accomplishment.id)}
            className="p-1.5 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
            aria-label="Delete accomplishment"
          >
            <X size={18} />
          </button>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        {accomplishment.description}
      </p>
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
        <div className="flex items-center gap-1">
          <Calendar size={16} />
          <span>{new Date(accomplishment.date).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center gap-1">
          <Tag size={16} />
          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">
            {accomplishment.category}
          </span>
        </div>
        {accomplishment.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {accomplishment.tags.map((tag) => (
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
    </div>
  );
}

