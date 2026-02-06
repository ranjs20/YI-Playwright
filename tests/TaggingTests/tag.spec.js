import { test, expect } from "@playwright/test";


test("Quick Login Check @sanity", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/login");
  await expect(page).toHaveTitle(/The Internet/);
});

test("Basic Navigation @sanity", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com");
  await expect(page.locator("h1")).toBeVisible();
});

test("Full Form Authentication @reg", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/login");
  await page.fill("#username", "tomsmith");
  await page.fill("#password", "SuperSecretPassword!");
  await page.click('button[type="submit"]');
  await expect(page.locator("#flash")).toContainText("You logged into a secure area!");
});

test("Complex File Upload @reg", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/upload");
  await page.setInputFiles("#file-upload", {
    name: "data.txt",
    mimeType: "text/plain",
    buffer: Buffer.from("hello world"),
  });
  await page.click("#file-submit");
  await expect(page.locator("h3")).toHaveText("File Uploaded!");
});

// This test belongs to BOTH groups
test("Logout Functionality @reg @sanity", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/login");
  // ... logout logic
});
//To Run specific tagged tests
//npx playwright test Filename --grep "@tagname"
