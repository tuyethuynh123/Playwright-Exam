import { test, expect } from '@playwright/test';
import { MyAccountPage } from '../pages/MyAccountPage';
import { BillingAddressPage } from '../pages/BillingAddressPage';
import { AccountData } from '../data/AccountData';
import { BillingAddressData } from '../data/BillingAddressData';

test('TC 02 _ Verify User Can Update Billing Address', async ({ page }) => {
  const myAccountPage = new MyAccountPage(page);
  const billingPage = new BillingAddressPage(page);

  //Preconditions: User is logged into the application
  //Step 1: Navigate to My Account → Addresses
  await myAccountPage.navigateTo('/');
  await myAccountPage.clickMenu('My Account');

  const { email, password } = AccountData.defaultUser;
  await myAccountPage.login(email, password);

  await myAccountPage.clickMenu('Addresses');

  //Step 2: Click "Edit" button for Billing Address
  await billingPage.clickEditBillingAddress();

  //Step 3: Enter valid information into all required fields and click "SAVE ADDRESS" button
  //Still In-progress handle to select Country and State from dropdowns
  const newAddress = BillingAddressData.random();
  await billingPage.fillBillingAddress(newAddress);

  //Step 4: Verify Message displays “Address changed successfully.”
  await expect(billingPage.getSuccessMessage()).toHaveText(/Address changed successfully/);

  //Step 5: Click “Addressed” link in the left-hand side menu
  await myAccountPage.clickMenu('Addresses');

  //Still In-progress: Step 6 - Verify Billing Address is displayed with:
});
