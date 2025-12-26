export interface Accomplishment {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  createdAt: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  status: "completed" | "in-progress" | "planned";
  startDate: string;
  endDate?: string;
  link?: string;
  repository?: string;
  tags: string[];
  createdAt: string;
}

export type EntryType = "accomplishment" | "project";

