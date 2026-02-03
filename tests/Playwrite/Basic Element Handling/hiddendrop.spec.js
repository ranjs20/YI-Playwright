import {test,expect} from '@playwright/test'
test('Hidden options dropdown',async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator("[name='username']").fill('Admin')
    await page.locator("[name='password']").fill('admin123')
    await page.locator("[type='submit']").click()
   
    await page.locator("//span[text()='PIM']").click()
    //Click on drop down
    await page.click("(//div[contains(text(),'-- Select --')])[2]")
    const options =await page.$$("//div[@role='listbox']//span")
    for(let option of options){
       const job = await option.textContent()
       console.log(job)
    }

   
})