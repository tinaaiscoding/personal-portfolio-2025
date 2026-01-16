# Portfolio Redesign

I rebuilt my portfolio to simplify it down to a single-page site that highlights my projects and provides a clear way to contact me. The goal was to create a straightforward, professional portfolio aimed at prospective employers while showcasing my animation skills through fun and playful interactions. The design is modern, responsive, and incorporates subtle playful elements to demonstrate creativity without compromising usability.

---

## Tech Stack
- Next.js (React framework)  
- TypeScript
- CSS / Tailwind

---

## Features
- **Fun, playful animations** – Animations throughout the site bring personality to the user experience, including a hidden easter egg for theme changes.  
- **Fluid and responsive layout** – Layouts dynamically adjust to different screen sizes using Tailwind and CSS variables.  
- **Simple project showcase and contact section** – Users can easily explore projects and reach out without distraction.  

---

## What I Learned
- **useGSAP() hook in React** – Learned how to clean up animations under the hood and keep components performant.  
- **Modular animation design** – Can write all animations in a separate `animation.ts` file and call them through the `useGSAP()` hook.  
- **Lenis scroll configuration** – Discovered that wrapping the root layout in `<ReactLenis>` with the `root` attribute isn’t necessary; scroll can be controlled per element by creating a Lenis instance.  
- **TypeScript generics** – Improved understanding of how to write reusable, type-safe functions and components.  
- **Hooks and context** – Gained confidence in using hooks and context to clean up component logic, which previously felt complex.  
- **Dynamic sizing** – Ensured all sizing is dynamic using Tailwind or CSS variables, making the layout flexible; the only exception is the logo.  
- **SVG scaling** – Learned how to adjust SVGs to scale properly on window resize, utilising SVGR package configurations for optimal results.  

---

## Challenges & Solutions

- **Problem:** The scroll cursor initially appeared in the top-left corner and jumped into view when hovering over the ProjectList component.  

  ```tsx
  {projectListHovered && (
    <div
      id='project-list-cursor'
      className='u-text-style-h6 uppercase'
      ref={scrollCursorRef}
    >
      scroll
    </div>
  )}
  ```
  - **Solution:**
    Initially tried setting the cursor position with GSAP.set in a helper function:
    ```tsx
    // instantly places the cursor at the real mouse location
    setScrollCursor(scrollCursorRef.current, x, y);
    ```
    This caused unexpected jumps. The final solution was simpler: remove the setScrollCursor function entirely and control visibility via JSX and inline style:
    ```tsx
    <div
      id='project-list-cursor'
      className='u-text-style-h6 uppercase'
      ref={scrollCursorRef}
      style={{ display: projectListHovered ? 'block' : 'none' }}
    >
      scroll
    </div>
    ```
    This approach works smoothly and keeps the animation behaviour predictable.
  

## Run Locally
```
git clone [add github repo]
cd [folder]
npm install
npm run dev
```
