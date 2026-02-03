import {test,expect} from '@playwright/test'
test("Multi Select Dropdown",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")
await page.selectOption('#colors',['Blue', 'Red', 'Yellow'])
//Check number of options in dropdown
const options = await page.locator('#colors option')
await expect(options).toHaveCount(5);
 
})