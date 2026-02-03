import {test, expect} from '@playwright/test'
test("handling radio buttons",async({page})=>{
     await page.goto("https://testautomationpractice.blogspot.com/")
    //Radio Button
    await page.locator('#female').check()
    //or
    //await page.check('#female')
    //To check
    await expect(await page.locator('#female')).toBeChecked()
    //or
    //await expect(await page.locator('#female').isChecked()).toBeTruthy();

    await expect(await page.locator('#male')).not.toBeChecked()
    await page.locator('#sunday').check()
    await page.locator('#saturday').check()

})