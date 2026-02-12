import { expect } from "@playwright/test";
import { CheckoutSelectors } from "../selectors/Selectors";
import { CheckOutData } from "../data/testData";
import * as base from "../base/basepage";
import * as inventoryPage from "./inventoryPage";
import * as cartPage from "./cartPage";

export async function performSuccessfulCheckout(page) {
  await cartPage.addItemAndNavigate(page);

  await cartPage.clickCheckout(page);

  await base.fills(
    page,
    CheckoutSelectors.firstName,
    CheckOutData.customer.firstName
  );
  await base.fills(
    page,
    CheckoutSelectors.lastName,
    CheckOutData.customer.lastName
  );
  await base.fills(
    page,
    CheckoutSelectors.postalCode,
    CheckOutData.customer.postalCode
  );
  await base.click(page, "#continue");

  await base.click(page, CheckoutSelectors.finishBtn);

  // Verify
  await expect(page.locator(CheckoutSelectors.successHeader)).toHaveText(
    CheckOutData.successMessage
  );
}
//For empty cart
export async function verifyEmptyCartBlocked(page) {
  await inventoryPage.goToCart(page);
  await cartPage.clickCheckout(page);
  await expect(page).not.toHaveURL(/checkout-step-one/);
}
