'use client';

import { useGSAP } from '@gsap/react';

import gsap from 'gsap';
import { useRef } from 'react';

import { useProjectContext } from '../../utils/context/projects';
import { projectListAnimation } from './animation';
import './styles.css';

gsap.registerPlugin(useGSAP);

export default function ProjectList() {
  const projectList = useProjectContext();
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (containerRef.current) {
        projectListAnimation(containerRef.current);
      }
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      id='project-list'
      className='max-h-[350px] gap-10 overflow-y-auto'
    >
      <div id='project-list-wrap' className=''>
        {projectList.map((project, i) => {
          return (
            <p
              key={i}
              className='project-list-item u-text-style-display py-5 opacity-30'
            >
              {project.name}
            </p>
          );
        })}
      </div>
    </div>
  );
}
