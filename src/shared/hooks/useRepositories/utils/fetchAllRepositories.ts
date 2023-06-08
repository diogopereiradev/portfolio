import settings from '../settings.json';

export async function fetchAllRepositories(): Promise<string[]> {
  const { API_URL, OWNER, CACHE_REVALIDATE_SECONDS } = settings;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const request = await fetch(`${API_URL}/users/${OWNER}/repos`, { next: { revalidate: CACHE_REVALIDATE_SECONDS } });
  
  if(request.status === 200) {
    const repositories = await request.json();
    const transformToRepositoriesNames = repositories.map((repository: { name: string }) => repository.name);
    const repositoriesNames = transformToRepositoriesNames.filter((name: string) => name != OWNER && name);
    return repositoriesNames;
  } else {
    throw 'Error on fetch repositories';
  }
}