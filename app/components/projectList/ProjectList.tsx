'use client';

import { useGSAP } from '@gsap/react';

import gsap from 'gsap';

import { useLenisScroll } from '@/app/utils/hooks/useLenisScroll';

import { useProjectContext } from '../../utils/context/projects';
import { projectListAnimation } from './animation';
import './styles.css';

gsap.registerPlugin(useGSAP);

export default function ProjectList() {
  const { projectList, setActiveProject } = useProjectContext();

  const { wrapperRef } = useLenisScroll<HTMLDivElement>({
    smoothWheel: true,
    wheelMultiplier: 0.6,
    lerp: 0.08,
  });

  useGSAP(
    () => {
      if (wrapperRef.current) {
        projectListAnimation(
          wrapperRef.current,
          projectList,
          setActiveProject,
        );
      }
    },
    { scope: wrapperRef },
  );

  return (
    <div
      ref={wrapperRef}
      id='project-list'
      className='max-h-[350px] gap-10 overflow-y-auto'
    >
      <div id='project-list-wrap' className=''>
        {projectList.map((project, i) => {
          return (
            <p
              key={i}
              className='project-list-item u-text-style-display py-5 opacity-10'
            >
              {project.name}
            </p>
          );
        })}
      </div>
    </div>
  );
}
