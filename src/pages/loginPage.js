import { expect } from "@playwright/test";
import * as base from "../base/basePage"; // Utility functions from your basePage
import { LoginSelectors } from "../selectors/Selectors";
import { LoginData } from "../data/LoginData";

async function performLoginAction(page, username, password) {
  await base.fills(page, LoginSelectors.username, username);
  await base.fills(page, LoginSelectors.password, password);
  await base.click(page, LoginSelectors.loginButton);
}
export async function validateAllValidUsers(page) {
  for (const user of LoginData.validUsers) {
    await base.gotoPage(page);

    await performLoginAction(page, user, LoginData.password);

    await expect(page).toHaveURL(/inventory.html/);
  }
}

export async function validateAllInvalidScenarios(page) {
  for (const scenario of LoginData.invalidScenarios) {
    await base.gotoPage(page);

    await performLoginAction(page, scenario.user, scenario.pass);

    const errorLocator = page.locator(LoginSelectors.errorMessage);
    await expect(errorLocator).toContainText(scenario.error);
  }
}
export async function loginStandardUser(page) {
  await base.gotoPage(page);
  await base.fills(page, LoginSelectors.username, LoginData.validUsers[0]);
  await base.fills(page, LoginSelectors.password, LoginData.password);
  await base.click(page, LoginSelectors.loginButton);
}
