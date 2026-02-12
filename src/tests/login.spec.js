import { test } from "@playwright/test";
import * as loginPage from "../pages/loginPage";
test.describe("Login Loop Suite", () => {
  test.beforeEach(async ({ page }) => {});

  test("Bulk Valid User Login", async ({page}) => {
    await loginPage.validateAllValidUsers(page);
  });

  test("Bulk Invalid Credentials Check", async ({page}) => {
    await loginPage.validateAllInvalidScenarios(page);
  });
});
