export const LoginData = {
  validUsers: [
    "standard_user",
    "problem_user",
    "performance_glitch_user",
    "error_user",
    "visual_user",
  ],
  password: "secret_sauce",
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
