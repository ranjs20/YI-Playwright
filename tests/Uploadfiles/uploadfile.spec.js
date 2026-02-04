import {test,expect} from '@playwright/test'
test('Single File', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/upload')
   const click= await page.locator('#file-upload')
   //for my specific device
   //await click.setInputFiles('C:/Users/NITRo/Desktop/401 wala.png')
   await click.setInputFiles('tests/UploadFiles/plane-mask.webp')
   await page.locator('#file-submit').click()
   await page.waitForTimeout(5000)


})
test.only("Multiple Files",async({page})=>{
    await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_multiple")
    const frame = page.frameLocator('#iframeResult');

   await frame.locator('#files').setInputFiles(['tests/UploadFiles/plane-mask.webp',
   'tests/UploadFiles/Screenshot_2.png'])
    
   await frame.locator('input[type="submit"]').click();
    await page.waitForTimeout(5000)

})