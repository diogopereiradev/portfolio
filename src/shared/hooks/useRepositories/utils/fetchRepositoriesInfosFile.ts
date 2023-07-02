import { base64Decoder } from '../../../utils/base64Decoder';
import { base64Repair } from '../../../utils/base64Repair';
import settings from '../settings.json';
import { ProjectData } from '../../../../@types/project';

async function fetchContents(repositoryName: string) {
  const { API_URL, OWNER, CACHE_REVALIDATE_SECONDS, REPOSITORY_INFOS_FILENAME } = settings;
  const requestUrl = `${API_URL}/repos/${OWNER}/${repositoryName}/contents/${REPOSITORY_INFOS_FILENAME}`;
  const requestOptions = { next: { revalidate: CACHE_REVALIDATE_SECONDS } };
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const request = await fetch(requestUrl, requestOptions);
  return request;
}

export async function fetchRepositoriesInfosFile(repositoriesNames: string[]) {
  const infosFiles: ProjectData[] = [];
  
  const fileFetcher = repositoriesNames.map(async repositoryName => {
    const request = await fetchContents(repositoryName);

    if(request.status === 200) {
      const file = await request.json();
      const content: ProjectData = JSON.parse(base64Decoder(base64Repair(file.content)));
      content.createdAt = new Date(content.createdAt);
      return content;
    } else if(request.status === 404) {
      return;
    } else {
      throw 'Error when trying to fetch repositories infos file';
    }
  });

  try {
    const results = await Promise.all(fileFetcher);
    infosFiles.push(...results.filter(result => result !== undefined) as ProjectData[]);
  } catch(error) {
    console.error(error);
    throw error;
  }

  return infosFiles;
}