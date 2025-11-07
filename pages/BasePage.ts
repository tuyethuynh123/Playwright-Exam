import { Page } from '@playwright/test';

export class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async click(selector: string) {
    await this.page.click(selector);
  }

  public async clickMenu(menuName: string) {
    const menuSelector = `a:has-text("${menuName}")`;
    await this.page.waitForSelector(menuSelector);
    await this.page.click(menuSelector);
  }

  public async getCount(selector: string) {
    return await this.page.locator(selector).count();
  }

  public async navigateTo(url: string) {
    await this.page.goto(url);
  }
}
