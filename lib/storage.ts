import { Accomplishment, Project } from "@/types";

const ACCOMPLISHMENTS_KEY = "accomplishments";
const PROJECTS_KEY = "projects";

export const storage = {
  // Accomplishments
  getAccomplishments: (): Accomplishment[] => {
    if (typeof window === "undefined") return [];
    const data = localStorage.getItem(ACCOMPLISHMENTS_KEY);
    return data ? JSON.parse(data) : [];
  },

  saveAccomplishment: (accomplishment: Accomplishment): void => {
    if (typeof window === "undefined") return;
    const accomplishments = storage.getAccomplishments();
    const index = accomplishments.findIndex((a) => a.id === accomplishment.id);
    if (index >= 0) {
      accomplishments[index] = accomplishment;
    } else {
      accomplishments.push(accomplishment);
    }
    localStorage.setItem(ACCOMPLISHMENTS_KEY, JSON.stringify(accomplishments));
  },

  deleteAccomplishment: (id: string): void => {
    if (typeof window === "undefined") return;
    const accomplishments = storage.getAccomplishments();
    const filtered = accomplishments.filter((a) => a.id !== id);
    localStorage.setItem(ACCOMPLISHMENTS_KEY, JSON.stringify(filtered));
  },

  // Projects
  getProjects: (): Project[] => {
    if (typeof window === "undefined") return [];
    const data = localStorage.getItem(PROJECTS_KEY);
    return data ? JSON.parse(data) : [];
  },

  saveProject: (project: Project): void => {
    if (typeof window === "undefined") return;
    const projects = storage.getProjects();
    const index = projects.findIndex((p) => p.id === project.id);
    if (index >= 0) {
      projects[index] = project;
    } else {
      projects.push(project);
    }
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
  },

  deleteProject: (id: string): void => {
    if (typeof window === "undefined") return;
    const projects = storage.getProjects();
    const filtered = projects.filter((p) => p.id !== id);
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(filtered));
  },
};

