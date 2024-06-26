import { ProjectData } from '../../../@types/project';
import { fetchAllRepositories } from './utils/fetchAllRepositories';
import { fetchRepositoriesInfosFile } from './utils/fetchRepositoriesInfosFile';

export async function useRepositories(): Promise<ProjectData[]> {
  try {
    const repositories = await fetchAllRepositories();
    const infos = await fetchRepositoriesInfosFile(repositories);
    return infos;
  } catch(error) {
    console.error(error);
    return [];
  }
}