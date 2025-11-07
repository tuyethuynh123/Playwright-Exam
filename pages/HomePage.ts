import { BasePage } from './BasePage';

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

  public async getTotalSlides() {
    return await this.page.locator('.n2-ss-slide').count();
  }
}
