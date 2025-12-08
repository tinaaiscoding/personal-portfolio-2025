'use client';

import Image from 'next/image';

import { useProjectContext } from '../utils/context/projects';

export default function ProjectInfo() {
  const { activeProject } = useProjectContext();

  return (
    <div id='project-info' className='flex flex-col gap-4'>
      <p className='u-text-style-large self-end'>{activeProject.description}</p>
      <div className='rounded-DEFAULT relative h-full w-full overflow-hidden'>
        {activeProject.media.includes('videos') ? (
          <video
            src={activeProject.media}
            autoPlay
            loop
            className='h-[320px] w-full object-cover'
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={activeProject.media}
            fill={true}
            alt=''
            className='object-cover'
          ></Image>
        )}
      </div>
    </div>
  );
}
