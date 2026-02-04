import {test,expect} from '@playwright/test'
test('Keyboard actions',async({page})=>{
    await page.goto("https://gotranscript.com/text-compare")
    await page.type('[name="text1"]','Hello Automation')
    //Ctrl A
    await page.keyboard.press('Control+A')
  //Ctrl C
  await page.keyboard.press('Control+C')
  //Tab
  await page.keyboard.down('Tab')
  await page.keyboard.up('Tab')//Release action , not mandatory
 //Ctrl + V -paste
 await page.keyboard.press('Control+V')
 await page.waitForTimeout(5000)

})