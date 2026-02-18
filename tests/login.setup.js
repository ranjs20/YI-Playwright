import { test as setup } from "@playwright/test";
import { loginStandardUser } from "../pages/loginPage";
import { gotoPage } from "../utils/actionUtils";

const AUTH_PATH = ".auth/login.json";

setup("Login and Save session", async ({ page }) => {
  await gotoPage(page);
  await loginStandardUser(page);
  await page.context().storageState({ path: AUTH_PATH });
});
