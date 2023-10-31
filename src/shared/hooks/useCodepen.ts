import { CodepenProjectData } from '../../@types/codepen';
import { base64Decoder } from '../utils/base64Decoder';
import { base64Repair } from '../utils/base64Repair';

export async function useCodepen(): Promise<CodepenProjectData[]> {
  const requestOptions = { next: { revalidate: 1200 } };
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const request = await fetch('https://api.github.com/repos/FhillSlinger/FhillSlinger/contents/codepen.projects.json', requestOptions);
  const response = await request.json();
  
  try {
    const content: { projects: CodepenProjectData[] } = JSON.parse(base64Repair(base64Decoder(response.content)));
    const projects = content.projects;
    return projects;
  } catch {
    return [];
  }
}