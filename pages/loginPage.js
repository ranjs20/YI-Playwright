import { expect } from "@playwright/test";
import * as utils from "../utils/actionUtils";
import { LoginData } from "../utils/testData";

export const LoginSelectors = {
  username: "#user-name",
  password: "#password",
  loginButton: "#login-button",
  errorMessage: '[data-test="error"]',
};
async function performLoginAction(page, username, password) {
  await utils.fills(page, LoginSelectors.username, username);
  await utils.fills(page, LoginSelectors.password, password);
  await utils.click(page, LoginSelectors.loginButton);
}
export async function validateAllValidUsers(page) {
  for (const user of LoginData.validUsers) {
    await utils.gotoPage(page);

    await performLoginAction(page, user, LoginData.password);

    await expect(page).toHaveURL(/inventory.html/);
  }
}

export async function validateAllInvalidScenarios(page) {
  for (const scenario of LoginData.invalidScenarios) {
    await utils.gotoPage(page);
    await performLoginAction(page, scenario.user, scenario.pass);
    const errorLocator = page.locator(LoginSelectors.errorMessage);
    await expect(errorLocator).toContainText(scenario.error);
  }
}
export async function loginStandardUser(page) {
  await utils.gotoPage(page);
  await utils.fills(page, LoginSelectors.username, LoginData.validUsers[0]);
  await utils.fills(page, LoginSelectors.password, LoginData.password);
  await utils.click(page, LoginSelectors.loginButton);
}
