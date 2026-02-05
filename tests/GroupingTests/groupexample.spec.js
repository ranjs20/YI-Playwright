import { test, expect } from '@playwright/test';

// GROUP 1: Everything related to logging in
test.describe('Login Functionality', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });

  test('should show error for invalid password', async ({ page }) => {
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'wrong_sauce');
    await page.click('#login-button');
    const error = page.locator('.error-message-container');
    await expect(error).toBeVisible();
  });

  test('should navigate to inventory on success', async ({ page }) => {
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL(/inventory/);
  });
});

// GROUP 2: Everything related to the cart
test.describe('Cart Operations', () => {
  
  // This hook logs in automatically ONLY for the cart tests
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
  });

  test('should add backpack to cart', async ({ page }) => {
    await page.click('#add-to-cart-sauce-labs-backpack');
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  });

  test('should remove item from cart', async ({ page }) => {
    await page.click('#add-to-cart-sauce-labs-backpack');
    await page.click('#remove-sauce-labs-backpack');
    await expect(page.locator('.shopping_cart_badge')).not.toBeVisible();
  });
});