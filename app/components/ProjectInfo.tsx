'use client';

import Image from 'next/image';

import { useProjectContext } from '../utils/context/projects';

export default function ProjectInfo() {
  const projectList = useProjectContext();

  return (
    <div id='project-info' className='flex flex-col gap-4'>
      <p className='u-text-style-large self-end'>Placeholder</p>
      <div className='rounded-DEFAULT relative h-full w-full overflow-hidden'>
        <Image
          src={'/images/dog1.jpg'}
          fill={true}
          alt=''
          objectFit='cover'
        ></Image>
      </div>
    </div>
  );
}
