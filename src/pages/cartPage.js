import { BasePage } from "../base/basepage";
import { CartSelectors } from "../selectors/Selectors";
export class CartPage extends BasePage {
  async getCartItems() {
    return this.page.locator(CartSelectors.cartItem);
  }
  async removeItem() {
    await this.page.locator(CartSelectors.removeBtn).first().click();
  }
  async clickCheckout() {
    await this.page.locator(CartSelectors.checkoutBtn).click();
  }
  async clickContinueShopping() {
    await this.page.locator(CartSelectors.continueBtn).click();
  }
}
