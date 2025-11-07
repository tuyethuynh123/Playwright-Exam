import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Verify Home page has exactly three sliders', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.navigateTo('/');
  await homePage.clickMenu('Shop');
  await homePage.clickHomeBreadcrumb();

  const sliderCount = await homePage.getTotalSlides();
  expect(sliderCount).toBe(3);
});
