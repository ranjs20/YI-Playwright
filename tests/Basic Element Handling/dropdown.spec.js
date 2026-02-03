import {test,expect} from '@playwright/test'
test("Dropdowns",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("#country").selectOption({value:'india'})
    //await page.locator("#country").selectOption({index:1})
    //To check number of options in dropdown
    const options = await page.locator('#country option')
    await expect(options).toHaveCount(10);
    //Approach 2
    //const options = await page.$$('#country option')
    //console.log("Number of options",options.length)
    //await expect(options.length).toBe(10);

    //Check Presence of value in dropdown
    const content =await page.locator('#country').textContent()
    await expect(content.includes('Japan')).toBeTruthy()

    //Via loops
    let status= false
    for (const con of content){
        console.log(con)
        if(con.includes('Japan')){
        status=true;
        break
        }
      await expect(status).toBeTruthy
    }

})