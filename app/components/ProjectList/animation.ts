import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function projectListAnimation(container: HTMLElement) {
  const projectItems =
    document.querySelectorAll<HTMLElement>('.project-list-item');

  if (!projectItems.length) return;

  // Initial state - first item will be active
  projectItems[0].classList.add('active');

  const firstItem = projectItems[0];
  const projectListContainer = document.querySelector(
    '#project-list',
  ) as HTMLElement;

  // Set CSS variables for determining dynamic #project-list-wrap height and margin-top
  document.documentElement.style.setProperty(
    '--project-item--height',
    `${firstItem.offsetHeight}px`,
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

  projectItems.forEach((item) => {
    gsap.timeline({
      scrollTrigger: {
        trigger: item,
        scroller: container,
        start: 'top 75%',
        end: 'bottom 55%',
        scrub: true,
        markers: true,
        onEnter: () => {
          projectItems.forEach((el) => el.classList.remove('active'));
          item.classList.add('active');
        },
        onEnterBack: () => {
          projectItems.forEach((el) => el.classList.remove('active'));
          item.classList.add('active');
        },
      },
    });
  });
}
