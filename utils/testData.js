export const LoginData = {
  validUsers: [
    "standard_user",
    "problem_user",
    "performance_glitch_user",
    "error_user",
    "visual_user",
  ],
  password: process.env.SAUCE_PASSWORD,
  invalidScenarios: [
    {
      user: "locked_out_user",
      pass: "secret_sauce",
      error: "Sorry, this user has been locked out",
    },
    {
      user: "wrong_user",
      pass: "secret_sauce",
      error: "Username and password do not match",
    },
    {
      user: "standard_user",
      pass: "wrong_password",
      error: "Username and password do not match",
    },
    {
      user: "",
      pass: "secret_sauce",
      error: "Username is required",
    },
    {
      user: "standard_user",
      pass: "",
      error: "Password is required",
    },
  ],
};

export const InventoryData = {
  pageTitle: "Products",
  sortOptions: {
    az: { value: "az", expectedFirst: "Sauce Labs Backpack" },
    za: { value: "za", expectedFirst: "Test.allTheThings() T-Shirt (Red)" },
    lohi: { value: "lohi", expectedFirst: "$7.99" },
    hilo: { value: "hilo", expectedFirst: "$49.99" },
  },
};
export const CheckOutData = {
  customer: {
    firstName: "Test",
    lastName: "Person",
    postalCode: "977",
  },
  successMessage: "Thank you for your order!",
};
