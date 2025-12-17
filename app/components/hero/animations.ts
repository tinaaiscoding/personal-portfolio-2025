import gsap from 'gsap';

export function createCursorMove(maskedEl: HTMLElement, x: string, y: string) {  
  const xTo = gsap.quickTo(maskedEl, x, {
    duration: 0.2,
    ease: 'back.out(4)',
  });

  const yTo = gsap.quickTo(maskedEl, y, {
    duration: 0.2,
    ease: 'back.out(4)',
  });

  return {
    move(x: number, y: number) {
      xTo(x);
      yTo(y);
    },
  };
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

export function animateMaskReveal(maskedEl: HTMLElement) {
  const tl = gsap.timeline({
    paused: true,
    onReverseComplete: () => {
      gsap.set(maskedEl, { display: 'none' });
    },
  });

  tl.from(maskedEl, {
    '--mask-size': `0px`,
    duration: 0.2,
    ease: 'power2.out',
  });

  return tl;
}
