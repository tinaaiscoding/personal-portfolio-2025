import gsap from 'gsap';

export function cursorAnimation(cursor: HTMLElement, x: number, y: number) {
  const xTo = gsap.quickTo(cursor, 'x', {
    duration: 0.2,
    ease: 'back.out(4)',
  });
  const yTo = gsap.quickTo(cursor, 'y', {
    duration: 0.2,
    ease: 'back.out(4)',
  });

  xTo(x);
  yTo(y);
}
