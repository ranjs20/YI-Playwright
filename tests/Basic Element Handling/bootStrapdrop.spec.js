import {test,expect} from '@playwright/test'
test("Bootstrap dropdown",async({page})=>{
    await page.goto("https://getbootstrap.com/docs/5.3/components/dropdowns/")
    await page.locator('.btn btn-secondary dropdown-toggle show').click()
   const options = await page.locator('')


})