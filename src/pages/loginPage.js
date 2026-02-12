import { BasePage } from "../base/basepage";
import { LoginSelectors } from "../selectors/Selectors";
export class LoginPage extends BasePage {
  async login(username, password) {
    await this.page.fill(LoginSelectors.username, username);
    await this.page.fill(LoginSelectors.password, password);
    await this.page.click(LoginSelectors.loginButton);
  }

  async getErrorMessage() {
    return await this.page.textContent(LoginSelectors.errorMessage);
  }
}
