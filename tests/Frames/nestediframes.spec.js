import{test,expect} from '@playwright/test'
test("Nested iframes",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    const frame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    await frame3.locator("input[name='mytext3']").fill('welcome')
//nested frame

const childFlames =await frame3.childFrames()
//await childFlames[0].locator("(//div[@class='uHMk6b fsHoPb'])[2]").check()
await childFlames[0].getByRole('checkbox', { name: 'Web Testing' }).check();

})
