/**
 * Generate a random email address
 * @param domain default: 'mailinator.com'
 * @returns string e.g. test1699331234567_123@mailinator.com
 */
export function randomEmail(domain: string = 'mailinator.com'): string {
  const timestamp = Date.now();
  const randomNum = Math.floor(Math.random() * 1000);
  return `test${timestamp}_${randomNum}@${domain}`;
}

/**
 * Generate a random password
 * @param length default 10
 * @returns string e.g. Ab3fGh9kL2
 */
export function randomPassword(length: number = 10): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}
