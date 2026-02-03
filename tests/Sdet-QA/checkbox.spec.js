import {test,expect} from '@playwright/test'

test("Multiple Checkboxes",async({page})=>{
    //Multiple Checkboxes
    await page.goto("https://testautomationpractice.blogspot.com/")
    const checkboxes =["#sunday","#monday",'#saturday']
    for(const box of checkboxes){
        await page.locator(box).check();
    }

})