import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { LoginData, InventoryData } from "../data/testData";
import { InventoryPage } from "../pages/inventoryPage";

test.describe("Inventory Page", () => {
  let inventoryPage;
  let page;

  test.beforeAll(async ({browser }) => {
    page = await browser.newPage()
    const loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    
    await loginPage.gotoPage("");
    await loginPage.login(LoginData.validUsers[0], LoginData.password);
    await expect(page).toHaveURL(/inventory.html/);
  });

  test("Add item and observe badge number", async () => {
    const initialCount = parseInt(await inventoryPage.getCartCount());
    await inventoryPage.addItem();
    const newCount = parseInt(await inventoryPage.getCartCount());
    expect(newCount).toBe(initialCount + 1);
  });

  test("Remove item decrements current count", async () => {
    await inventoryPage.addItem();
    const countBefore = parseInt(await inventoryPage.getCartCount());
    await inventoryPage.removeItem();
    const countAfter = parseInt(await inventoryPage.getCartCount());
    expect(countAfter).toBe(countBefore - 1);
  });
  //------------------FILTER LOGIC---------------------------
  test("Verify all sorting filters correctly reorder items", async () => {
    const filters = InventoryData.sortOptions;

    // A to Z
    await inventoryPage.sortBy(filters.az.value);
    expect(await inventoryPage.getFirstItemName()).toBe(
      filters.az.expectedFirst
    );

    // Z to A 
    await inventoryPage.sortBy(filters.za.value);
    expect(await inventoryPage.getFirstItemName()).toBe(
      filters.za.expectedFirst
    );

    // Price: Low to High
    await inventoryPage.sortBy(filters.lohi.value);
    expect(await inventoryPage.getFirstItemPrice()).toBe(
      filters.lohi.expectedFirst
    );

    // Price: High to Low
    await inventoryPage.sortBy(filters.hilo.value);
    expect(await inventoryPage.getFirstItemPrice()).toBe(
      filters.hilo.expectedFirst
    );
  });
});
