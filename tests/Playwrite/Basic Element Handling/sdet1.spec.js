import {test, expect}  from '@playwright/test'

test('Locators',async({page}) => {
    await page.goto('https://demoblaze.com/')
    const pageTitle = page.title();
    console.log('Page title is :',pageTitle);
    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL('https://demoblaze.com/')

    
})
 