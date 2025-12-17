export function getRelativePosition(mouseX: number, mouseY: number, el: HTMLElement) {
  const rect = el.getBoundingClientRect();

  return {
    relX: mouseX - rect.left,
    relY: mouseY - rect.top,
  };
}