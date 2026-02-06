import { test, expect } from '@playwright/test';

test.describe('Real Page Scenarios', () => {

  test.fail('Check if first checkbox is active', async ({ page }) => {

    
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
    await expect(page.locator('input').first()).toBeChecked(); 
  });

  test.slow('Wait for hidden element to appear', async ({ page }) => {

    
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/2');
    await page.getByRole('button', { name: 'Start' }).click();
    await expect(page.getByText('Hello World!')).toBeVisible();
  });

  test('Upload a profile picture', async ({ page }) => {
    
    
    await page.goto('https://the-internet.herokuapp.com/upload');
    await page.setInputFiles('#file-upload', 'tests/Annotations/Screenshot_2.png');
  });

  test('Login to secure area', async ({ page, browserName }) => {
    test.skip(browserName !== 'chromium');
    
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.fill('#username', 'tomsmith');
    await page.fill('#password', 'SuperSecretPassword!');
    await page.click('button[type="submit"]');
    await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
  });

});