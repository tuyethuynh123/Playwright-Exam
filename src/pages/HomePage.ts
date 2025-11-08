import { BasePage } from './BasePage';
import { Locator } from '@playwright/test';

export class HomePage extends BasePage {
  private readonly sliders = '.n2-ss-slider';  
  private readonly breadcrumb = '.woocommerce-breadcrumb'; 

  public async getSliderCount() {
    return await this.getCount(this.sliders);
  }

  public async clickHomeBreadcrumb() {
    await this.page.click(`${this.breadcrumb} >> text=Home`);
    await this.page.waitForSelector(this.sliders);
  }

  public getArrivals(): Locator {
    return this.page.locator('.woocommerce .products li');
  }

  public async clickArrivalByIndex(index: number = 0) {
  await this.getArrivals().nth(index).locator('img').click({ force: true });
}

  public async clickFirstArrival() {
    await this.clickArrivalByIndex(0);
  }
}
