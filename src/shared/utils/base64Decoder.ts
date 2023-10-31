export function base64Decoder(base64String: string): string {
  try {
    return decodeURIComponent(atob(base64String).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  } catch {
    return '';
  }
}