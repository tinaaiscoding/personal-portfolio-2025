'use client';

import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
} from 'react';

export type Project = {
  name: string;
  description: string;
  image: string;
  link: string;
};

export type Projects = Project[];

type ProjectContext = {
  projectList: Projects;
  activeProject: Project;
  setActiveProject: Dispatch<SetStateAction<Project>>;
};

const ProjectContext = createContext<ProjectContext | undefined>(undefined);

export const ProjectProvider: React.FC<{
  children: React.ReactNode;
  value: ProjectContext;
}> = ({ children, value }) => {
  return <ProjectContext value={value}>{children}</ProjectContext>;
};

export function useProjectContext() {
  const context = useContext(ProjectContext);

  if (!context)
    throw new Error(
      'useProjectContext must be used with ProjectContext Provider',
    );

  return context;
}
