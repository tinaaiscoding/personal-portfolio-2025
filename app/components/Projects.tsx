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
    media: 'https://blocks.astratic.com/img/general-img-landscape.png',
    link: '#',
  },
    {
    name: 'Photo List',
    description: 'Smooth Scroll + Photo List Animation',
    media: '/videos/photo-list-animation.mov',
    link: 'https://github.com/tinaaiscoding/smooth-scroll',
  },
  {
    name: 'jetia',
    description: 'Digital Agency Concept Website',
    media: '/videos/jetia.mov',
    link: 'https://jetia.vercel.app/',
  },
  {
    name: "Tina's Portfolio '23",
    description: 'Personal Portfolio (2023)',
    media: '/videos/tinas-portfolio-23.mov',
    link: 'https://github.com/tinaaiscoding/tinas-portfolio',
  },

];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project>(PROJECT_LIST[0]);

  return (
    <ProjectProvider
      value={{ projectList: PROJECT_LIST, activeProject, setActiveProject }}
    >
      <div
        id='projects'
        className='grid max-h-(--project-list--height) grid-cols-2 gap-(--site--gutter)'
      >
        <ProjectList />
        <ProjectInfo />
      </div>
    </ProjectProvider>
  );
}
