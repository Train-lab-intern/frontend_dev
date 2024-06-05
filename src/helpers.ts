export function valideGmail(
  gmail: string,
  username: string,
  password: string,
): boolean {
  if (
    gmail.length > 11 &&
    gmail.lastIndexOf('@gmail.com') === 9 &&
    username === '' &&
    password === ''
  ) {
    return true;
  }
  return false;
}
