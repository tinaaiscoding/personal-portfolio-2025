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

export function animateCursor(cursor: HTMLElement) {
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

  xTo(maskXPosition - maskSize / 2);
  yTo(maskYPosition - maskSize / 2);
}

export function animateMaskReveal(maskedEl: HTMLElement) {
  gsap.from(maskedEl, {
    '--mask-size': `20px`,
    duration: 0.5,
    ease: 'power2.out',
  });
}
