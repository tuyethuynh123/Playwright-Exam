import { Page, Locator, expect } from '@playwright/test';

export class BillingAddressPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Click Edit Billing Address
   */
  public async clickEditBillingAddress() {
    await this.page.getByRole('link', { name: 'Edit' }).first().click();
    await this.page.getByRole('textbox', { name: 'First Name *' }).waitFor({ state: 'visible', timeout: 10000 });
  }

  /**
   * Fill billing address with required fields only
   */
  public async fillBillingAddress(addressData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    country: string;
    address1: string;
    city: string;
    state: string;
    postcode: string;
  }) {
    // First Name
    await this.page.getByRole('textbox', { name: 'First Name *' }).fill(addressData.firstName);

    // Last Name
    await this.page.getByRole('textbox', { name: 'Last Name *' }).fill(addressData.lastName);

    // Email
    await this.page.getByRole('textbox', { name: 'Email Address *' }).fill(addressData.email);

    // Phone
    await this.page.getByRole('textbox', { name: 'Phone *' }).fill(addressData.phone);

    // Country (dropdown)
    // await this.page.getByRole('link', { name: 'Select an option…' }).click(); // open dropdown
    // await this.page.getByRole('option', { name: addressData.country }).click();

    // Address
    await this.page.getByRole('textbox', { name: 'Address *', exact: true }).fill(addressData.address1);

    // City
    await this.page.getByRole('textbox', { name: 'Town / City *' }).fill(addressData.city);

    // State (dropdown)
    // await this.page.getByRole('link', { name: 'Select an option…' }).click();
    // await this.page.getByRole('option', { name: addressData.state }).click();

    // Save Address
    await this.page.getByRole('button', { name: 'Save Address' }).click();

    // Wait for success message
    await this.page.locator('.woocommerce-message').waitFor({ timeout: 10000 });

    return addressData; 
  }

  /**
   * Get the success message after saving the billing address
   */
  public getSuccessMessage(): Locator {
    return this.page.locator('.woocommerce-message');
  }

}
