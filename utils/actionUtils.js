export async function gotoPage(page, path = "/") {
  await page.goto(path);
}
export async function gotoInventoryPage(page, path = "/inventory.html") {
  await page.goto(path);
}
export async function fills(page, selector, value) {
  await page.fill(selector, value);
}

export async function click(page, selector) {
  await page.click(selector);
}
