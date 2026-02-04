import {test,expect} from '@playwright/test'
test("handling table",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const table= await page.locator('#productTable')
    //total number of rows and columns
    const columns = await table.locator('thead tr th')
    console.log('Number of columns:',await columns.count())
    await expect(await columns.count()).toBe(4)
     const rows= await table.locator('tbody tr')
     console.log('Number of Rows:',await rows.count())
     await expect(await rows.count()).toBe(5)
     
     //print all products except checkbox w/o pagination
     for(let i=0;i<await rows.count();i++){
        const Prow= rows.nth(i)
          const tds= rows.locator('td')
        
        for(let j=0;j<await columns.count();j++){
           await tds.nth(j).textContent
        }
    }

    //read data from all the pages-pagination
    const pages=await page.locator('.pagination li a')
    console.log("Total Pages =",await pages.count())
    for(let p=1;p<await pages.count();p++){
        await pages.nth(p).click()
  }
  for(let k=1;k<await rows.count();k++){
    const row= rows.nth(k)
    const tds= row.locator('td')
    for(let j=0;j< await tds.count()-1;j++){
        console.log(await tds.nth(j).textContent())
    }
  }

        //Check checkbox for 4
    const four = rows.filter({
        has: page.locator('td'),
        hasText: 'Smartwatch'
    })
    await four.getByRole('checkbox').check();
    await Product(rows,page,'Laptop');
})

 //Check multiple options
   async function Product(rows,page,name){
    const pro = rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    await Product(rows,page,'Laptop');
   }
