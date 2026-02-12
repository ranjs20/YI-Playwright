import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { LoginData } from "../data/testData";

test.describe("Login Functionality", () => {
  //-----------------VALID CREDENTIALS-----------------------------

  test.describe("Login with valid credentials", () => {
    LoginData.validUsers.forEach((username) => {
      test(`Successful Login for ${username}`, async ({ page }) => {
        const loginPage = new LoginPage(page);
        //Go to Page
        await loginPage.gotoPage("");
        await loginPage.login(username, LoginData.password);
        //Assert navigation to inventory page
        await expect(page).toHaveURL(/inventory.html/);
      });
    });
  });

  //-------------INVALID CREDENTIALS--------------------
  test.describe("Login with invalid credentials", () => {
    test("Empty username and password", async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.gotoPage("");
      await loginPage.login("", "");
      const error = await loginPage.getErrorMessage();
      expect(error).toContain("Username is required");
    });
    test("Valid username and invalid password", async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.gotoPage("");
      await loginPage.login(LoginData.validUsers[0], "wrong_password");
      const error = await loginPage.getErrorMessage();
      expect(error).toContain("Username and password do not match");
    });
    test("Invalid Username and valid password", async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.gotoPage("");
      await loginPage.login("Username", LoginData.password);
      const error = await loginPage.getErrorMessage();
      expect(error).toContain("Username and password do not match");
    });
    test("Locked out user and valid password", async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.gotoPage("");
      await loginPage.login(LoginData.lockedoutuser, LoginData.password);
      const error = await loginPage.getErrorMessage();
      expect(error).toContain("this user has been locked out");
    });
  });
});
