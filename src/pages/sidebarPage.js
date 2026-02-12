import { expect } from "@playwright/test";
import { SidebarSelectors } from "../selectors/Selectors";
import * as base from "../base/basepage";
import * as inventoryPage from "./inventoryPage";

export async function logout(page) {
  await base.click(page, SidebarSelectors.menuBtn);

  await page.locator(SidebarSelectors.logoutLink).waitFor({ state: "visible" });
  await base.click(page, SidebarSelectors.logoutLink);

  // Verify we are back at the login page
  await expect(page).toHaveURL(/saucedemo.com/);
}

export async function resetAppState(page) {
  await inventoryPage.addItem(page);
  await base.click(page, SidebarSelectors.menuBtn);
  await base.click(page, SidebarSelectors.resetLink);

  // Close the sidebar
  await base.click(page, SidebarSelectors.closeBtn);
}
