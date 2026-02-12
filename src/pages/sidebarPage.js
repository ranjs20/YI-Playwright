import { BasePage } from "../base/basepage";
import { SidebarSelectors } from "../selectors/Selectors";

export class SidebarPage extends BasePage {
  async openMenu() {
    await this.page.click(SidebarSelectors.menuBtn);
  }
  async logout() {
    await this.openMenu();
    await this.page.click(SidebarSelectors.logoutLink);
  }
  async resetApp() {
    await this.openMenu();
    await this.page.click(SidebarSelectors.resetLink);
    await this.page.click(SidebarSelectors.closeBtn);
  }
}
