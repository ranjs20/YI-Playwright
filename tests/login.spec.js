import { test } from "@playwright/test";
import * as loginPage from "../pages/loginPage";
test.describe("Login Loop Suite", () => {
  test.beforeEach(async ({ page }) => {});

  test("TC_AUTH_01 : Verify Login is  Successful with valid Credential Combinations", async ({ page }) => {
    await loginPage.validateAllValidUsers(page);
  });

  test("TC_AUTH_02 : Verify Login is Not Successful with Multiple Invalid Credential Combinations", async ({ page }) => {
    await loginPage.validateAllInvalidScenarios(page);
  });
});
