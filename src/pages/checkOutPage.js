import { BasePage } from "../base/basepage";
import { CheckoutSelectors } from "../selectors/Selectors";

export class CheckOutPage extends BasePage {
  async fillInfo(firstName, lastName, postalCode) {
    await this.page.fill(CheckoutSelectors.firstName, firstName);
    await this.page.fill(CheckoutSelectors.lastName, lastName);
    await this.page.fill(CheckoutSelectors.postalCode, postalCode);
    await this.page.click("#continue");
  }
  async finishPurchase() {
    await this.page.click(CheckoutSelectors.finishBtn);
  }
  async getSuccessMessage() {
    return await this.page
      .locator(CheckoutSelectors.successHeader)
      .textContent();
  }
}
