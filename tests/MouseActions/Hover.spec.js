
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.ebay.com/');
  await page.locator('#vl-flyout-nav').getByRole('link', { name: 'Motors' }).hover();
  await page.locator('div.vl-flyout-nav__flyout', { hasText: 'Air intake' }).hover()
  await page.waitForTimeout(5000);
});