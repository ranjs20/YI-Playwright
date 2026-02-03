import {test,expect} from '@playwright/test'
test.skip('Alert with OK only',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //To enable dialog handling
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept();})
        await page.click('#alertBtn')
        await page.waitForTimeout(500)
})
test.skip('Alert with OK and Cancel',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //To enable dialog handling
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept() //close by OK Button
       // await dialog.dismiss() //close by Cancel button 
    })
        await page.click('#confirmBtn')
        await page.waitForTimeout(500)
})
test('Alert with Prompt',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //To enable dialog handling
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')

        await dialog.accept('Person') //close by OK Button can also provide value
       // await dialog.dismiss() //close by Cancel button 
    })
        await page.click('#promptBtn')
        await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello Person! How are you today?')
        await page.waitForTimeout(500)
})
