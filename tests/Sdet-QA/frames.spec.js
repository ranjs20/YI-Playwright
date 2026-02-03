import {expect,test} from '@playwright/test'
test("Frames",async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')
    //total frames
    const allframes = await page.frames()
    console.log("Number of Frames",allframes.length)
    //using name or url copy link address
    const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    await frame1.fill("[name='mytext1']",'Person');

    //approach2
    const box=await page.frameLocator(" frame[src='frame_2.html']").locator("[name='mytext2']")
     await box.fill("Hello")

})