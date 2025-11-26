import { ProjectProvider } from '../utils/context/projects';
import ProjectInfo from './ProjectInfo';
import ProjectList from './ProjectList/ProjectList';

const PROJECT_LIST = [
  {
    name: 'Portfolio Concept',
    description: 'Portfolio Concept Website',
    image: '/image/dog4.png',
  },

  {
    name: 'jetia',
    description: 'Digital Agency Concept Website',
    image: '/image/dog3.jpg',
  },
  {
    name: "Tina's Portfolio '23",
    description: 'Previous Personal Portfolio',
    image: '/image/dog2.jpg',
  },
  {
    name: 'Pokemon Battles',
    description: 'Pokemon Project',
    image: '/image/dog1.jpg',
  },
  {
    name: 'Placeholder 1',
    description: 'Placeholder 1 Website',
    image: '/image/dog4.png',
  },
  {
    name: 'Placeholder 2',
    description: 'Placeholder 2 Website',
    image: '/image/dog4.png',
  },
  {
    name: 'Placeholder 3',
    description: 'Placeholder 3 Website',
    image: '/image/dog4.png',
  },
  {
    name: 'Placeholder 4',
    description: 'Placeholder 4 Website',
    image: '/image/dog4.png',
  },
  {
    name: 'Placeholder 5',
    description: 'Placeholder 5 Website',
    image: '/image/dog4.png',
  },
];

export default function Projects() {
  return (
    <ProjectProvider context={PROJECT_LIST}>
      <div
        id='projects'
        className='grid max-h-[350px] grid-cols-2 gap-(--site--gutter)'
      >
        <ProjectList />
        <ProjectInfo />
      </div>
    </ProjectProvider>
  );
}
