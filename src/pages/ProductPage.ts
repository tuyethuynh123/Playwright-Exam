import { Page } from '@playwright/test';

export class ProductPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public get addToBasketBtn() {
    return this.page.locator('button.single_add_to_cart_button');
  }

  public get bookTitle() {
    return this.page.locator('.product_title');
  }

  public get bookDescription() {
    return this.page.locator('div[itemprop="description"] p');
  }

  public get bookPrice() {
    return this.page.locator('.summary .price');
  }

  public get quantityInput() {
    return this.page.locator('input.qty');
  }

  public get cartItems() {
    return this.page.locator('.wpmenucart-contents .cartcontents');
  }

  public get cartAmount() {
    return this.page.locator('.wpmenucart-contents .amount');
  }

  public async getBookDetails() {
    const title = (await this.bookTitle.textContent())?.trim() ?? '';
    const description = (await this.bookDescription.textContent())?.trim() ?? '';
    const price = (await this.bookPrice.textContent())?.trim() ?? '';
    const quantity = (await this.quantityInput.inputValue()).trim();

    return { title, description, price, quantity };
  }

  public async verifyBookDetails(expected: {
    title?: string;
    description?: string;
    price?: string;
    quantity?: string;
  }) {
    const details = await this.getBookDetails();
    console.log('Book Details:', details);

    const isCorrect =
      (!expected.title || details.title === expected.title) &&
      (!expected.description || details.description === expected.description) &&
      (!expected.price || details.price === expected.price) &&
      (!expected.quantity || details.quantity === expected.quantity);

    console.log('Is book details correct?', isCorrect);

    return { details, isCorrect };
  }

  public async getCartDetails() {
    await this.cartItems.waitFor({ state: 'visible', timeout: 10000 });
    await this.cartAmount.waitFor({ state: 'visible', timeout: 10000 });

    const cartItemsText = await this.cartItems.textContent();
    const cartAmountText = await this.cartAmount.textContent();

    const items = parseInt(cartItemsText?.split(' ')[0] ?? '0', 10);
    const amount = cartAmountText?.trim() ?? '';

    return { items, amount };
  }

  public async verifyAddedToCart(expectedItems: number, expectedAmount: string) {
    const { items, amount } = await this.getCartDetails();
    const isCorrect = items === expectedItems && amount === expectedAmount;
    console.log('Cart Details:', { items, amount });
    console.log('Is cart updated correctly?', isCorrect);
    return isCorrect;
  }
}
