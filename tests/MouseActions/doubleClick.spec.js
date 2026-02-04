import {test,expect} from '@playwright/test'
test("Mouse Double Click",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
   const button= await page.getByRole('button', { name: 'Copy Text' });
   await button.dblclick()

})