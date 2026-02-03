import {test,expect} from '@playwright/test'

test('Builtin Locators',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    const logo =  page.getByAltText('company-branding')
    await expect(logo).toBeVisible();
    //placeholder
    await page.getByPlaceholder('Username').fill("Admin")
    await page.getByPlaceholder('Password').fill("admin123")
  //byRole
  await page.getByRole('button',{type: 'submit'}).click()
  //byText
  const text=await page.getByText('Time at Work')
  await expect(text).toBeVisible()

})