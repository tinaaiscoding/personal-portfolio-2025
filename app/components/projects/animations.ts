import gsap from 'gsap';

export function animateScrollCursor(scrollCursor: HTMLElement) {
  const tl = gsap.timeline({ paused: true });

  tl.fromTo(
    scrollCursor,
    { scale: 0 },
    {
      scale: 1,
      duration: 0.2,
      ease: 'power3.out',
    },
  );

  return tl;
}
