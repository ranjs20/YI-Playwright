import { test, expect } from '@playwright/test';

test('Capture all suggestions using for...of', async ({ page }) => {
  await page.goto('https://www.ebay.com');

  // 1. Trigger the dropdown
  await page.getByPlaceholder('Search for anything').pressSequentially('mac', { delay: 100 });

  // 2. Wait for the list to appear
  const listContainer = page.locator('#ebay-autocomplete');
  await listContainer.waitFor();

  // 3. Get an array of all matching Locators
  const suggestionItems = await page.locator('#ebay-autocomplete li').all();
  
  console.log(`Found ${suggestionItems.length} suggestions:`);

  // 4. Use for...of to iterate through the array
  for (const item of suggestionItems) {
    // Extract the data-value attribute from each locator
    const value = await item.getAttribute('data-value');
    console.log(`Suggestion: ${value}`);
  }
});