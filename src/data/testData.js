export const LoginData = {
  validUsers: [
    "standard_user",
    "problem_user",
    "performance_glitch_user",
    "error_user",
    "visual_user",
  ],
  lockedoutuser: "locked_out_user",
  password: "secret_sauce",
};
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
