import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { InventoryPage } from "../pages/inventoryPage";
import { CartPage } from "../pages/cartPage";
import { LoginData } from "../data/testData";

test.describe("Cart Functionality", () => {
  let inventoryPage, cartPage, page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    const loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    await loginPage.gotoPage("");
    await loginPage.login(LoginData.validUsers[0], LoginData.password);
  });

  test("Verify added Product is in cart", async () => {
    await inventoryPage.addItem();
    await inventoryPage.goToCart();
    const items = await cartPage.getCartItems();
    await expect(items).toHaveCount(1);
  });
  test("Verify item can be removed from cart", async () => {
    await inventoryPage.addItem();
    await inventoryPage.goToCart();
    await cartPage.removeItem();
    const items = await cartPage.getCartItems();
    await expect(items).toHaveCount(0);
  });
  test("Add product and proceed checkout", async () => {
    await inventoryPage.addItem();
    await inventoryPage.goToCart();
    await cartPage.clickCheckout();
    await expect(page).toHaveURL(/checkout-step-one/);
  });
});
