'use client'

import React, { createContext, useContext } from 'react';

type Project = {
  name: string;
  description: string;
  image: string;
};
type Projects = Project[];

export const ProjectContext = createContext<Projects | undefined>(undefined);

export const ProjectProvider: React.FC<{
  children: React.ReactNode;
  context: Projects;
}> = ({ children, context }) => {
  return (
    <ProjectContext.Provider value={context}>
      {children}
    </ProjectContext.Provider>
  );
};

export function useProjectContext() {
  const context = useContext(ProjectContext);

  if (!context)
    throw new Error(
      'useProjectContext must be used with ProjectContext Provider',
    );

  return context;
}
