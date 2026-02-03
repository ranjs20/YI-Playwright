import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://e-sifarish-stage.k8s.yipl.com.np/login');
  await page.getByRole('textbox', { name: 'प्रयोगकर्ताको नाम' }).click();
  await page.getByRole('textbox', { name: 'प्रयोगकर्ताको नाम' }).fill('dhangadhi_ward19_admin');
  await page.getByRole('textbox', { name: 'पासवर्ड' }).click();
  await page.getByRole('textbox', { name: 'पासवर्ड' }).fill('secret');
  await page.getByRole('button', { name: 'लग - इन' }).click();
  await page.getByRole('link', { name: 'सिफारिस फारमहरू', exact: true }).click();
  await page.getByRole('link', { name: '0 जन्म मिति प्रमाणित', exact: true }).click();
  await page.getByText('निवेदक श्री तथा श्रीमती को निवेदन अनुसार उहाँहरुको छोराछोरी धनगढी उप-महानगरपालिक').click();
  await page.locator('input[name="mother"]').click();
  await page.locator('input[name="mother"]').fill('Hello');
  await page.getByRole('button', { name: 'अगाडी बढ्नुहाेस्' }).click();
  await page.getByRole('button', { name: 'ठीक छ' }).click();
  await page.getByRole('link', { name: 'धनगढी उप-महानगरपालिका' }).click();
  await page.getByRole('link', { name: 'Ward 19 Admin' }).click();
  await page.getByRole('link', { name: 'बाहिर निस्कनु' }).click();
});