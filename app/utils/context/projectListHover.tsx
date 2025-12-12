import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
} from 'react';

type ProjectListHover = {
  projectListHovered: boolean;
  setProjectListHovered: Dispatch<SetStateAction<boolean>>;
};

const ProjectListHover = createContext<ProjectListHover | undefined>(undefined);

export const ProjectListHoverProvider: React.FC<{
  children: React.ReactNode;
  value: ProjectListHover;
}> = ({ children, value }) => {
  return (
    <ProjectListHover.Provider value={value}>
      {children}
    </ProjectListHover.Provider>
  );
};

export function useProjectListHover() {
  const context = useContext(ProjectListHover);

  if (!context)
    throw new Error(
      'useProjectListHover must be used with ProjectListHover Provider',
    );

  return context;
}
