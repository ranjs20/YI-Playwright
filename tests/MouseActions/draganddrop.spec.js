import {test,expect} from '@playwright/test'
test("Drag and Drop",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const dest = await page.locator('#draggable')
    const source= await page.locator('#droppable')

    //Approach 1
    //Drag
    await dest.hover()
    await page.mouse.down()
   //Drop
   await source.hover()
   await page.mouse.up()
   await page.waitForTimeout(5000)


})