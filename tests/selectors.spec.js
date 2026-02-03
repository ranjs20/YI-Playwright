import {test,expect} from '@playwright/test'
test('Selector Demo',async({page})=>{
    await page.goto('https://e-sifarish-stage.k8s.yipl.com.np/login')
    // await page.pause()
    // await page.click('id=username') or
    await page.locator('id=username').fill('dhangadhi_ward19_admin')
    await page.locator('id=password').fill('secret')
    //await page.locator('button[type=submit]').click()
    await page.getByText('लग - इन').click()
    await page.pause()


});
