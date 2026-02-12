export const LoginSelectors = {
  username: "#user-name",
  password: "#password",
  loginButton: "#login-button",
  errorMessage: '[data-test="error"]',
};

export const InventorySelectors = {
  addBtn: 'button:has-text("Add to Cart")',
  removeBtn: 'button:has-text("Remove")',
  badge: ".shopping_cart_badge",
  cart: ".shopping_cart_link",
  sortDropdown: ".product_sort_container",
  productPrice: ".inventory_item_price",
  productName: ".inventory_item_name",
};

export const CartSelectors = {
  cartItem: ".cart_item",
  checkoutBtn: "#checkout",
  removeBtn: 'button:has-text("Remove")',
  continueBtn: "#continue-shopping",
};

export const CheckoutSelectors = {
  firstName: "#first-name",
  lastName: "#last-name",
  postalCode: "#postal-code",
  finishBtn: "#finish",
  successHeader: ".complete-header",
  errorMessage: '[data-test="error"]',
};
export const SidebarSelectors = {
  menuBtn: "#react-burger-menu-btn",
  closeBtn: "#react-burger-cross-btn",
  logoutLink: "#logout_sidebar_link",
  resetLink: "#reset_sidebar_link",
  allItemsLink: "#inventory_sidebar_link",
  aboutLink: "#about_sidebar_link",
};
