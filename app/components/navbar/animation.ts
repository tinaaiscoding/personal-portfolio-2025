import gsap from 'gsap';

export function animateButtonHover(maskedButton: HTMLElement) {
  const tl = gsap.timeline({
    paused: true,
    onReverseComplete: () => {
      gsap.set(maskedButton, { display: 'none' });
    },
  });

  tl.from(maskedButton, {
    '--mask-size': `0px`,
    duration: 0.7,
    ease: 'power1.inOut',
  });

  return tl;
}
