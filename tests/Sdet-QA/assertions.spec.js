import {expect, test} from '@playwright/test'
test('Assertions',async({page})=>{
     await page.goto('https://demo.nopcommerce.com/register')
     //URL
     await expect(page).toHaveURL('https://demo.nopcommerce.com/register')
     //Title
     await expect(page).toHaveTitle('nopCommerce demo store. Register')
     //Visibility
     const logo= page.locator('.header-logo')
     await expect(logo).toBeVisible()
     //Enable/Disable
     const search = page.locator('#small-searchterms')
     await expect(search).toBeEnabled()
     //radio button
     const gender =page.locator('#gender-male')
     await gender.click()
     await expect(gender).toBeChecked()
     //check box
     const news = page.locator('#NewsLetterSubscriptions_0__IsActive')
     await expect(news).toBeChecked()
    //Element has attribute
    const regButton = page.locator('#register-button')
    await expect(regButton).toHaveAttribute('type','submit')
    //to have text
    await expect(page.locator('.page-title h1')).toHaveText('Register')
    //to Contain Text
     await expect(page.locator('.page-title h1')).toContainText('Reg')
    //to Have Value
    const email = await page.locator('#Email')
    await email.fill('test@demo.com');
    await expect(email).toHaveValue('test@demo.com')
   //to have count
  // Target the menu items that are direct children of the main menu container
  const mainCategories = page.locator('.menu > .menu__item');

  // Assertion: Expecting 7 main categories (Computers, Electronics, Apparel, Downloads, Books, Jewelry, Gift Cards)
  await expect(mainCategories).toHaveCount(7);
})