import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class MyAccountPage extends BasePage {
  private regEmailInput = this.page.locator('#reg_email');
  private regPasswordInput = this.page.locator('#reg_password');
  private registerButton = this.page.getByRole('button', { name: 'Register' });
  private loginUsernameInput = this.page.locator('#username');
  private loginPasswordInput = this.page.locator('#password');
  private loginButton = this.page.getByRole('button', { name: 'Login' });

  constructor(page: Page) {
    super(page);
  }

  public async register(email: string, password: string) {
    await this.regEmailInput.fill(email);
    await this.regPasswordInput.fill(password);
    await this.registerButton.click();
    await this.getWelcomeMessageLocator().waitFor({ timeout: 10000 });
  }

  public async login(usernameOrEmail: string, password: string) {
    await this.loginUsernameInput.fill(usernameOrEmail);
    await this.loginPasswordInput.fill(password);
    await this.loginButton.click();
    await this.getWelcomeMessageLocator().waitFor({ timeout: 10000 });
  }

  public getWelcomeUsernameLocator() {
    return this.page.locator('p.woocommerce-MyAccount-content strong');
  }

  public getWelcomeMessageLocator() {
    return this.page.locator('div.woocommerce-MyAccount-content p').first();
  }

  public async clickMenu(menuName: string) {
    const menuLink = this.page.getByRole('link', { name: menuName }).first();
    await menuLink.click();
    await this.page.waitForLoadState('networkidle');
  }

}
