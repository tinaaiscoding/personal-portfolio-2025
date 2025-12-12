'use client';

import { useGSAP } from '@gsap/react';

import gsap from 'gsap';

import { useProjectListHover } from '@/app/utils/context/projectListHover';
import { useLenisScroll } from '@/app/utils/hooks/useLenisScroll';

import { useProjectContext } from '../../utils/context/projects';
import { projectListAnimation } from './animation';
import './styles.css';

gsap.registerPlugin(useGSAP);

export default function ProjectList() {
  const { projectList, setActiveProject } = useProjectContext();
  const { setProjectListHovered } = useProjectListHover();

  const { wrapperRef } = useLenisScroll<HTMLDivElement>({
    smoothWheel: true,
    wheelMultiplier: 0.6,
    lerp: 0.08,
  });

  useGSAP(
    () => {
      if (wrapperRef.current) {
        projectListAnimation(wrapperRef.current, projectList, setActiveProject);
      }
    },
    { scope: wrapperRef },
  );

  return (
    <div
      ref={wrapperRef}
      id='project-list'
      className='max-h-(--project-list--height) gap-10 overflow-y-auto'
      onMouseEnter={() => setProjectListHovered(true)}
      onMouseLeave={() => setProjectListHovered(false)}
    >
      <div id='project-list-wrap'>
        {projectList.map((project, i) => {
          return (
            <a
              href={project.link}
              key={i}
              className='project-list-item u-text-style-display py-5 opacity-10'
            >
              {project.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}
