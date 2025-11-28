'use client';

import { useState } from 'react';

import { ProjectProvider } from '../utils/context/projects';
import type { Project, Projects } from '../utils/context/projects';
import ProjectInfo from './ProjectInfo';
import ProjectList from './projectList/ProjectList';

const PROJECT_LIST = [
  {
    name: 'Portfolio Concept',
    description: 'Portfolio Concept Website',
    image: '/images/dog4.jpg',
  },
  {
    name: 'jetia',
    description: 'Digital Agency Concept Website',
    image: '/images/dog3.jpg',
  },
  {
    name: "Tina's Portfolio '23",
    description: 'Previous Personal Portfolio',
    image: '/images/dog2.jpg',
  },
  {
    name: 'Pokemon Battles',
    description: 'Pokemon Project',
    image: '/images/dog1.jpg',
  },
  {
    name: 'Placeholder 1',
    description: 'Placeholder 1 Website',
    image: '/images/dog4.jpg',
  },
  {
    name: 'Placeholder 2',
    description: 'Placeholder 2 Website',
    image: '/images/dog2.jpg',
  },
  {
    name: 'Placeholder 3',
    description: 'Placeholder 3 Website',
    image: '/images/dog3.jpg',
  },
  {
    name: 'Placeholder 4',
    description: 'Placeholder 4 Website',
    image: '/images/dog4.jpg',
  },
  {
    name: 'Placeholder 5',
    description: 'Placeholder 5 Website',
    image: '/images/dog1.jpg',
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project>(
    PROJECT_LIST[0],
  );

  return (
    <ProjectProvider
      value={{ projectList: PROJECT_LIST, activeProject, setActiveProject }}
    >
      <div
        id='projects'
        className='grid max-h-[350px] grid-cols-2 gap-(--site--gutter)'
      >
        <ProjectList />
        <ProjectInfo />
      </div>
    </ProjectProvider>
  );
}
