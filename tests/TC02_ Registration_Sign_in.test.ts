import { test, expect } from '@playwright/test';
import { MyAccountPage } from '../pages/MyAccountPage';
import { randomEmail, randomPassword } from '../utils/random';
import { getUsernameFromEmail } from '../utils/string';

test('Register a new user and navigate to Home page', async ({ page }) => {
  const myAccountPage = new MyAccountPage(page);

  await myAccountPage.navigateTo('/');
  await myAccountPage.clickMenu('My Account');

  const email = randomEmail();
  const password = randomPassword(12);
  await myAccountPage.register(email, password);

  const username = getUsernameFromEmail(email);
  const expectedText = `Hello ${username} (not ${username}? Sign out)`;

  await expect(myAccountPage.getWelcomeMessageLocator()).toHaveText(expectedText);
});
