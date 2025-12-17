import gsap from 'gsap';

export function animateCursorMove(cursor: HTMLElement, x: number, y: number) {
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

export function animateCursorExit(cursor: HTMLElement) {
  const tl = gsap.timeline({ paused: true });

  tl.fromTo(
    cursor,
    { scale: 1 },
    {
      scale: 0,
      duration: 0.1,
      ease: 'power3.out',
    },
  );

  return tl;
}

export function animateMaskCursorMove(
  maskedEl: HTMLElement,
  maskXPosition: number,
  maskYPosition: number,
) {
  const maskSize = 70;

  const xTo = gsap.quickTo(maskedEl, '--mask-x', {
    duration: 0.2,
    ease: 'back.out(4)',
  });

  const yTo = gsap.quickTo(maskedEl, '--mask-y', {
    duration: 0.2,
    ease: 'back.out(4)',
  });

  xTo(maskXPosition);
  yTo(maskYPosition);
}

export function animateMaskReveal(maskedEl: HTMLElement) {
  const tl = gsap.timeline({ paused: true });

  tl.from(maskedEl, {
    display: 'hidden',
    '--mask-size': `0px`,
    duration: 0.3,
    ease: 'power2.out',
  });

  return tl;
}
