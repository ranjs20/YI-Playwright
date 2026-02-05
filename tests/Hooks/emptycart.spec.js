import {test,expect} from '@playwright/test'
test.describe('Negative Inventory Scenarios', () => {
    // We use a fresh page for these to avoid state leakage
    test.beforeEach(async ({ page }) => {
        await page.goto("https://www.saucedemo.com/");
        await page.fill("#user-name", "standard_user");
        await page.fill("#password", "secret_sauce");
        await page.click("#login-button");
        console.log(page)
    });

    test("Accessing checkout with an empty cart", async ({ page }) => {
        await page.click(".shopping_cart_link");
         await page.click("#checkout");
        
        // Negative test: Should we be allowed to checkout with 0 items?
        // Note: SauceDemo actually allows this, so your test might "fail" 
        // if you expect an error, which reveals a logic flaw in the app!
        const cartItems = await page.locator(".cart_item").count();
        expect(cartItems).toBe(0);
    });

    test("Submit checkout form without information", async ({ page }) => {
        await page.goto("https://www.saucedemo.com/checkout-step-one.html");
        await page.click("#continue");

        // Assert: Validation errors for missing info
        await expect(page.locator('[data-test="error"]')).toBeVisible();
        await expect(page.locator('[data-test="error"]')).toContainText("Error: First Name is required");
    });
});