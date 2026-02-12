export const InventoryData = {
  pageTitle: "Products",
  sortOptions: {
    az: { value: "az", expectedFirst: "Sauce Labs Backpack" },
    za: { value: "za", expectedFirst: "Test.allTheThings() T-Shirt (Red)" },
    lohi: { value: "lohi", expectedFirst: "$7.99" },
    hilo: { value: "hilo", expectedFirst: "$49.99" },
  },
  expectedItemCount: 6,
};
export const CheckOutData = {
  customer: {
    firstName: "Test",
    lastName: "Person",
    postalCode: "977",
  },
  successMessage: "Thank you for your order!",
};
export const SidebarSelectors = {
  menuBtn: "#react-burger-menu-btn",
  closeBtn: "#react-burger-cross-btn",
  logoutLink: "#logout_sidebar_link",
  allItemsLink: "#inventory_sidebar_link",
  aboutLink: "#about_sidebar_link",
  resetLink: "#reset_sidebar_link",
};
