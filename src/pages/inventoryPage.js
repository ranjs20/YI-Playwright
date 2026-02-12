import { BasePage } from "../base/basepage";
import { InventorySelectors } from "../selectors/Selectors";

export class InventoryPage extends BasePage {
  async addItem() {
    await this.page.locator(InventorySelectors.addBtn).first().click();
  }
  async removeItem() {
    await this.page.locator(InventorySelectors.removeBtn).first().click();
  }
  async sortBy(sortOption) {
    await this.page.selectOption(InventorySelectors.sortDropdown, sortOption);
  }
  async getFirstItemName() {
    return await this.page
      .locator(InventorySelectors.productName)
      .first()
      .innerText();
  }
  async getFirstItemPrice() {
    return await this.page
      .locator(InventorySelectors.productPrice)
      .first()
      .innerText();
  }
  async goToCart() {
    await this.page.click(".shopping_cart_link");
  }
  //Get number from cart badge
  async getCartCount() {
    const badge = this.page.locator(InventorySelectors.badge);

    if (await badge.isVisible()) {
      return await badge.textContent();
    } else {
      return 0;
    }
  }
}
