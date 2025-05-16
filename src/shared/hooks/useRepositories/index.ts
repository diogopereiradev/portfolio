import { ProjectData } from '../../../@types/project';
import { fetchAllRepositories } from './utils/fetchAllRepositories';
import { fetchRepositoriesInfosFile } from './utils/fetchRepositoriesInfosFile';

const fallbackProjects: ProjectData[] = [
  {
    priority: 5,
    name: 'Beacons',
    description: {
      pt: 'É um projeto simples de links que leva para as minhas redes sociais.',
      en: 'It\'s a simple project of links that lead to my social media profiles.'
    },
    technologies: [
      { label: 'Vue.js', color: '#4dc93a' },
      { label: 'Tailwind', color: '#4d90b6' },
      { label: 'Typescript', color: '#4d90b6' }
    ],
    projectThumbImageUrl: 'https://i.ibb.co/gt7HqWz/image.png',
    projectIconUrl: 'https://raw.githubusercontent.com/diogopereiradev/beacons/master/public/favicons/favicon.ico',
    projectRepositoryUrl: 'https://github.com/diogopereiradev/beacons',
    projectLiveUrl: 'https://beacons.diogopereira.site',
    createdAt: new Date('2023-04-15T03:00:00.000Z')
  },
  {
    priority: 2,
    name: 'Devy',
    description: {
      pt: 'Devy é um app que vai te ajudar a se concentrar nos estudos, ele fornece ferramentas de som, timer, etc, para te ajudar a se concentrar.',
      en: 'Devy is an app that will help you concentrate on your studies, it provides sound tools, a timer, etc, to help you concentrate.'
    },
    technologies: [
      { label: 'Tauri', color: '#d8e270' },
      { label: 'Rust', color: '#c38837' },
      { label: 'React.js', color: '#4d90b6' },
      { label: 'SC', color: '#b360a5' },
      { label: 'Typescript', color: '#4d90b6' }
    ],
    projectThumbImageUrl: 'https://i.ibb.co/NWhdcHX/image.png',
    projectIconUrl: 'https://raw.githubusercontent.com/diogopereiradev/devy/master/src-tauri/icons/128x128.png',
    projectRepositoryUrl: 'https://github.com/diogopereiradev/devy',
    projectLiveUrl: 'https://github.com/diogopereiradev/devy',
    createdAt: new Date('2023-01-07T03:00:00.000Z')
  },
  {
    priority: 4,
    name: 'Nosferatu',
    description: {
      pt: 'Nosferatu é uma landing page com a tematica do anime Tsuki to Laika to Nosferatu. Criado com o objetivo de treinar o CSS',
      en: 'Nosferatu is a landing page with the thematic of the anime Tsuki to Laika to Nosferatu. Made with the objetive of learn more about CSS.'
    },
    technologies: [
      { label: 'React.js', color: '#4d90b6' },
      { label: 'SC', color: '#b360a5' },
      { label: 'Typescript', color: '#4d90b6' }
    ],
    projectThumbImageUrl: 'https://i.ibb.co/PFF6ysn/image.png',
    projectIconUrl: 'https://raw.githubusercontent.com/diogopereiradev/nosferatu/master/src/assets/images/logo.png',
    projectRepositoryUrl: 'https://github.com/diogopereiradev/nosferatu',
    projectLiveUrl: 'https://nosferatu.vercel.app/',
    createdAt: new Date('2022-01-11T03:00:00.000Z')
  },
  {
    priority: 3,
    name: 'Pixarti',
    description: {
      pt: 'Este projeto te permite criar pixelart utilizando box-shadow do CSS, o que faz com que você consiga fácilmente importar cubo por cubo e criar animações neles em seu site.',
      en: 'This project allows you to create pixel art using CSS box-shadow, which enables you to easily import cube by cube and create animations on them for your website.'
    },
    technologies: [
      { label: 'React.js', color: '#4d90b6' },
      { label: 'SC', color: '#b360a5' },
      { label: 'Typescript', color: '#4d90b6' }
    ],
    projectThumbImageUrl: 'https://i.ibb.co/TBYmjm8/image.png',
    projectIconUrl: 'https://raw.githubusercontent.com/diogopereiradev/pixarti/master/src/assets/images/favicon.ico',
    projectRepositoryUrl: 'https://github.com/diogopereiradev/pixarti',
    projectLiveUrl: 'https://pixarti.vercel.app/',
    createdAt: new Date('2022-01-21T03:00:00.000Z')
  },
  {
    priority: 1,
    name: 'Pulsar',
    description: {
      pt: 'Crie sites de documentação modernos para sua aplicação usando Pulsar. Você gerará páginas de documentação estáticas personalizadas com o Pulsar.',
      en: 'Create modern documentation websites for your application using Pulsar. You will generate custom static documentation pages with Pulsar.'
    },
    technologies: [
      { label: 'Vue.js', color: '#4dc93a' },
      { label: 'Nuxt.js', color: '#4dc93a' },
      { label: 'Tailwind', color: '#4d90b6' },
      { label: 'Typescript', color: '#4d90b6' }
    ],
    projectThumbImageUrl: 'https://i.ibb.co/Xpjz7dY/image.png',
    projectIconUrl: 'https://raw.githubusercontent.com/diogopereiradev/pulsar/main/public/favicons/favicon.ico',
    projectRepositoryUrl: 'https://github.com/diogopereiradev/pulsar',
    projectLiveUrl: 'https://pulsar.diogopereira.site/',
    createdAt: new Date('')
  }
];

export async function useRepositories(): Promise<ProjectData[]> {
  try {
    const repositories = await fetchAllRepositories();
    const infos = await fetchRepositoriesInfosFile(repositories);
    if (!infos || infos.length === 0) {
      return fallbackProjects;
    }
    return infos;
  } catch (error) {
    console.error(error);
    return fallbackProjects;
  }
}