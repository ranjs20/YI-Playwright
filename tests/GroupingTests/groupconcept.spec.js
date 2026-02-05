import { test, expect } from "@playwright/test";

test.describe("Group 1", () => {
  test("test 1", async ({ page }) => {
    console.log("first");
  });
  test("test 2", async ({ page }) => {
    console.log("second");
  });
});
test.describe("Group 2", () => {
  test("test 3", async ({ page }) => {
    console.log("third");
  });
  test("test 4", async ({ page }) => {
    console.log("fourth");
  });
});
test.beforeAll(async () => {
  console.log("BeforeALl");
});
test.afterAll(async () => {
  console.log("After ALl");
});
test.beforeEach(async () => {
  console.log("BeforeEach");
});
test.afterEach(async () => {
  console.log("After Each");
});
