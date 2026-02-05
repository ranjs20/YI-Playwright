import {test,expect} from '@playwright/test'
test('Page Screeenshot',async({page})=>{
    await page.goto('https://demoblaze.com/')
    await page.screenshot({path:'tests/CapturingScreenshots/'+'HomePage.png'})

})
test('Full Page Screeenshot',async({page})=>{
    await page.goto('https://demoblaze.com/')
    await page.screenshot({path:'tests/CapturingScreenshots/'+'HomePage.png',fullPage:true})
    
})
test.only('Element Screeenshot',async({page})=>{
    await page.goto('https://demoblaze.com/')
    await page.locator('//*[@id="tbodyid"]/div[7]').screenshot({path:'tests/CapturingScreenshots/'+'HomePage.png'})
})

 