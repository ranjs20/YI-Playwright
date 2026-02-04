import {test,expect} from '@playwright/test'
test("Right Click",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/context_menu")
    const button =await page.locator('#hot-spot')
    //For right click
    await button.click({button:'right'});
    await page.waitForTimeout(5000);
})