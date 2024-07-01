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

export function validOnlyNumber(value: string) {
  const regExp = /^[0-9]*$/;
  return regExp.test(value);
}

export function validRecoveryCode(recoveryCode: string) {
  const recoveryCodeLength = 6;
  const regExp = new RegExp(`^[0-9]{${recoveryCodeLength}}$`);
  return regExp.test(recoveryCode);
}

export function validMail(mail: string) {
  const regExp = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regExp.test(mail);
}

export function validPassword(password: string) {
  const regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;
  // const regExp = /^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z\d]{8,16}$/;
  return regExp.test(password);
}
