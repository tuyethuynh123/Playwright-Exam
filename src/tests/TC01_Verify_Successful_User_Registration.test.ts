import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { BookData } from '../data/BookData';

test('Verify Home page arrivals and book details', async ({ page }) => {
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
 
  //Step 1: Navigate to URL
  await homePage.navigateTo('/');

  //Step 2: Click "Shop" menu in the header
  await homePage.clickMenu('Shop');

  //Step 3: Click on Home link in the breadcrumb
  await homePage.clickHomeBreadcrumb();

  //Step 4: Verify whether the Home page must contains only Three Arrivals
  const arrivals = homePage.getArrivals();
  await expect(arrivals).toHaveCount(3);

  //Step 5: Click one of the image in the Arrivals
  await homePage.clickFirstArrival();

  //Step 6: Verify
  //User is redirected to the next page where the user can add that book into basket
  await expect(page).toHaveURL(/product/);
  await expect(productPage.addToBasketBtn).toBeVisible();
  await expect(productPage.addToBasketBtn).toBeEnabled();
  await productPage.addToBasketBtn.click();
  const expectedItems = parseInt(BookData.quantity, 10);
  const expectedAmount = BookData.price;
  const isCartCorrect = await productPage.verifyAddedToCart(expectedItems, expectedAmount);
  if (!isCartCorrect) {
    throw new Error('Cart did not update correctly after adding the book');
  }
  
  //Arrival’s description and price must be displayed correctly
  //Arrival’s quantity default should be 1
  const { details, isCorrect } = await productPage.verifyBookDetails(BookData);
  console.log('Book Details:', details);
  expect(isCorrect).toBe(true); 
});
