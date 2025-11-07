import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class MyAccountPage extends BasePage {
  private readonly emailInput: Locator;
  private readonly passwordInput: Locator;
  private readonly registerButton: Locator;

  constructor(page: Page) {
    super(page);
    this.emailInput = page.locator('#reg_email');
    this.passwordInput = page.locator('#reg_password');
    this.registerButton = page.locator('input[value="Register"]');
  }

  public async register(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.registerButton.click();
    await this.getWelcomeMessageLocator().waitFor({ timeout: 10000 });
  }

  public getWelcomeUsernameLocator() {
    return this.page.locator('p.woocommerce-MyAccount-content strong');
  }

  public getWelcomeMessageLocator() {
    return this.page.locator('div.woocommerce-MyAccount-content p').first();
  }
}
