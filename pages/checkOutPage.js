import { expect } from "@playwright/test";
import { CheckOutData } from "../utils/testData";
import * as utils from "../utils/actionUtils";
import { goToCart } from "./inventoryPage";
import * as cartPage from "./cartPage";

export const CheckoutSelectors = {
  firstName: "#first-name",
  lastName: "#last-name",
  postalCode: "#postal-code",
  finishBtn: "#finish",
  successHeader: ".complete-header",
  errorMessage: '[data-test="error"]',
};
export async function performSuccessfulCheckout(page) {
  await cartPage.addItemAndNavigate(page);

  await cartPage.clickCheckout(page);

  await utils.fills(
    page,
    CheckoutSelectors.firstName,
    CheckOutData.customer.firstName
  );
  await utils.fills(
    page,
    CheckoutSelectors.lastName,
    CheckOutData.customer.lastName
  );
  await utils.fills(
    page,
    CheckoutSelectors.postalCode,
    CheckOutData.customer.postalCode
  );
  await utils.click(page, "#continue");

  await utils.click(page, CheckoutSelectors.finishBtn);

  // Verify
  await expect(page.locator(CheckoutSelectors.successHeader)).toHaveText(
    CheckOutData.successMessage
  );
}
//For empty cart
export async function verifyEmptyCartBlocked(page) {
  await goToCart(page);
  await cartPage.clickCheckout(page);
  await expect(page).not.toHaveURL(/checkout-step-one/);
}
