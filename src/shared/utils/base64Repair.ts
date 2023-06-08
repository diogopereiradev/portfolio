export function base64Repair(malformedBase64String: string): string {
  const repairedBase64String = malformedBase64String
    .replace(/\n/g, '');
  return repairedBase64String;
}