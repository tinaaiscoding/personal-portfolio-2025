'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { useProjectContext } from '../utils/context/projects';
import Loading from './Loading';

export default function ProjectInfo() {
  const { activeProject } = useProjectContext();
  const [isMediaLoaded, setIsMediaLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsMediaLoaded(false);
  }, [activeProject.media]);

  return (
    <div id='project-info' className='flex flex-col gap-4'>
      <p className='u-text-style-large self-end'>{activeProject.description}</p>
      <div className='rounded-DEFAULT w-col-m-6 relative h-full self-end overflow-hidden'>
        {!isMediaLoaded && <Loading />}

        {activeProject.media.includes('videos') ? (
          <video
            src={activeProject.media}
            autoPlay
            loop
            className='h-(--project-video--height) w-full object-cover'
            onLoadedData={() => setIsMediaLoaded(true)}
            poster={activeProject.poster}
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
