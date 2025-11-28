import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Dispatch, SetStateAction } from 'react';

import type { Project, Projects } from '@/app/utils/context/projects';

gsap.registerPlugin(ScrollTrigger);

export function projectListAnimation(
  container: HTMLElement,
  projectList: Projects,
  setActiveProject: Dispatch<SetStateAction<Project>>,
) {
  const projectItems =
    document.querySelectorAll<HTMLElement>('.project-list-item');

  if (!projectItems.length) return;

  const singleItem = projectItems[0];
  const projectListContainer = document.querySelector(
    '#project-list',
  ) as HTMLElement;

  // Set CSS variables for determining dynamic #project-list-wrap height and margin-top
  document.documentElement.style.setProperty(
    '--project-item--height',
    `${singleItem.offsetHeight}px`,
  );

  document.documentElement.style.setProperty(
    '--project-list--count',
    `${projectItems.length}`,
  );

  if (projectListContainer) {
    document.documentElement.style.setProperty(
      '--project-list-container--height',
      `${projectListContainer.offsetHeight}px`,
    );
  }

  projectItems.forEach((item, i) => {
    gsap.timeline({
      scrollTrigger: {
        trigger: item,
        scroller: container,
        start: 'top 75%',
        end: 'bottom 75%',
        scrub: true,
        onEnter: () => {
          projectItems.forEach((el) => el.classList.remove('active'));
          item.classList.add('active');
          setActiveProject(projectList[i]);
        },
        onEnterBack: () => {
          projectItems.forEach((el) => el.classList.remove('active'));
          item.classList.add('active');
          setActiveProject(projectList[i]);
        },
      },
    });
  });
}
