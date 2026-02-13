import { expect } from "@playwright/test";
import * as utils from "../utils/actionUtils";
import { addItem } from "./inventoryPage";

export const SidebarSelectors = {
  menuBtn: "#react-burger-menu-btn",
  closeBtn: "#react-burger-cross-btn",
  logoutLink: "#logout_sidebar_link",
  resetLink: "#reset_sidebar_link",
  allItemsLink: "#inventory_sidebar_link",
  aboutLink: "#about_sidebar_link",
};

export async function logout(page) {
  await utils.click(page, SidebarSelectors.menuBtn);

  await page.locator(SidebarSelectors.logoutLink).waitFor({ state: "visible" });
  await utils.click(page, SidebarSelectors.logoutLink);

  // Verify we are back at the login page
  await expect(page).toHaveURL(/saucedemo.com/);
}

export async function resetAppState(page) {
  await addItem(page);
  await utils.click(page, SidebarSelectors.menuBtn);
  await utils.click(page, SidebarSelectors.resetLink);

  // Close the sidebar
  await utils.click(page, SidebarSelectors.closeBtn);
}
