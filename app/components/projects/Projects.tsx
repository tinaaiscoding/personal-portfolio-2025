'use client';

import { useGSAP } from '@gsap/react';

import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

import { useProjectListHover } from '../../utils/context/projectListHover';
import { ProjectProvider } from '../../utils/context/projects';
import type { Project, Projects } from '../../utils/context/projects';
import { useMousePosition } from '../../utils/hooks/useMousePosition';
import ProjectInfo from '../ProjectInfo';
import { animateCursorMove } from '../hero/animations';
import ProjectList from '../projectList/ProjectList';
import { animateScrollCursor } from './animations';
import './styles.css';

gsap.registerPlugin(useGSAP);

const PROJECT_LIST = [
  {
    name: 'Portfolio Concept',
    description: 'Portfolio Concept Website',
    media: '/videos/portfolio-concept.mp4',
    link: 'https://github.com/tinaaiscoding/portfolio-concept-website',
    poster: '/images/portfolio-concept-poster.jpg',
  },
  {
    name: 'Photo List',
    description: 'Smooth Scroll + Photo List Animation',
    media: '/videos/photo-list-animation.mp4',
    link: 'https://github.com/tinaaiscoding/smooth-scroll',
    poster: '/images/photo-list-animation-poster.jpg',
  },
  {
    name: 'jetia',
    description: 'Digital Agency Concept Website',
    media: '/videos/jetia.mp4',
    link: 'https://jetia.vercel.app/',
    poster: '/images/jetia-poster.jpg',
  },
  {
    name: "Tina's Portfolio '23",
    description: 'Personal Portfolio (2023)',
    media: '/videos/tinas-portfolio-23.mp4',
    link: 'https://github.com/tinaaiscoding/tinas-portfolio',
    poster: '/images/tinas-portfolio-23-poster.jpg',
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project>(PROJECT_LIST[0]);

  const scrollCursorRef = useRef<HTMLDivElement>(null);
  const scrollCursorTlRef = useRef<gsap.core.Timeline | null>(null);

  const { projectListHovered } = useProjectListHover();
  const { x, y } = useMousePosition();

  useEffect(() => {
    if (!scrollCursorRef.current) return;
    scrollCursorTlRef.current = animateScrollCursor(scrollCursorRef.current);
  }, []);

  useGSAP(
    () => {
      if (!scrollCursorTlRef.current) return;

      if (projectListHovered) {
        scrollCursorTlRef.current.play();
      } else {
        scrollCursorTlRef.current.progress(1).reverse();
      }
    },
    { dependencies: [projectListHovered] },
  );

  useGSAP(
    () => {
      if (!scrollCursorRef.current) return;

      animateCursorMove(scrollCursorRef.current, x, y);
    },
    { dependencies: [x, y] },
  );

  return (
    <ProjectProvider
      value={{ projectList: PROJECT_LIST, activeProject, setActiveProject }}
    >
      <div
        id='projects'
        className='grid max-h-(--project-list--height) grid-cols-2 gap-(--site--gutter)'
      >
        <div
          id='project-list-cursor'
          className='u-text-style-h6 uppercase'
          ref={scrollCursorRef}
        >
          scroll
        </div>

        <ProjectList />
        <ProjectInfo />
      </div>
    </ProjectProvider>
  );
}
