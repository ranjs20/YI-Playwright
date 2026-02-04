import {test,expect} from '@playwright/test'
test("Date Picker",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    //Fill Directly
    // await page.fill('#datepicker','07/09/2020')
    // await page.waitForTimeout(3000)
    //date picker logic
    const year="2027"
    const month ="March"
    const date ="20"
    await page.click('#datepicker') 
    while(true){
        const currentYear =await page.locator('.ui-datepicker-year').textContent()
        const currentMonth = await page.locator('.ui-datepicker-month').textContent()

        if(currentYear==year && currentMonth== month){
            break;
        }
        await page.locator('[title="Next"]').click()

    }
    //date via loop
   const dates= await page.$$(".ui-state-default")
   for(const date of dates){
    if(await date.textContent()==date){
        await date.click();
        break;
    }
   
   }
   //date without loop
 // await page.click(`//a[@class='ui-state-default'][text()=${date}]`)

})
