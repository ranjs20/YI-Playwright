export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async gotoPage(path = " ") {
    await this.page.goto(path);
  }
}
