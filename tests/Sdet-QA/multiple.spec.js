import {expect,test} from '@playwright/test'

test('Locate Multiple Elements',async({page})=>{
    await page.goto('https://demoblaze.com/')
    //page.waitForSelector("//div[@id='tbodyid']//h4/a")
    const link = await page.$$("//div[@id='tbodyid']//h4/a")
    for(const links of link){
       const  linkTest = await links.textContent()
         console.log(linkTest);
    }
})