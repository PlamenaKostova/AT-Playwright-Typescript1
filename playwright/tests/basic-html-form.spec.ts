import { test, expect } from "@playwright/test";
// Wrap all tests within a describe block to improve structure
test.describe("Homework Playwright Xpath Form Test", () => {
  // Add a beforeEach hook to avoid repeating page.goto() in every test.
  test.beforeEach("Navigate to the page", async ({ page }) => {
    // Add the web form link as an environment variable and use it in the beforeEach hook
    const url: string =
      process.env.FORM_TEST ||
      "https://testpages.herokuapp.com/styled/basic-html-form-test.html";

    await page.goto(url);
  });
  test("Has h1 title", async ({ page }) => {
    const title = page.locator("xpath=//h1");
    await expect(title).toHaveText("Basic HTML Form Example");
  });

  test("Test Checkbox selection", async ({ page }) => {
    const checkboxEl = page.locator('xpath=//input[@value="cb2"]');
    await expect(checkboxEl).toBeVisible();
    await checkboxEl.check();
    await expect(checkboxEl).toBeChecked();
  });

  test("Select dropdown option", async ({ page }) => {
    const dropdown = page.locator('xpath=//select[@name="dropdown"]');
    await expect(dropdown).toBeVisible();
    await dropdown.selectOption("dd2");
    await expect(dropdown).toHaveValue("dd2");
  });
  // Locate the Password field, fill it with a test value, and validate the input

  test("Locate Password field", async ({ page }) => {
    const passwordField = page.locator('xpath=//input[@name="password"]');
    await expect(passwordField).toBeVisible();
    await passwordField.fill("Password123");
    await expect(passwordField).toHaveValue("Password123");
  });

  // Locate the TextArea field, fill it with a test value, and validate the input.
  test("Locate TextArea field", async ({ page }) => {
    const textArea = page.locator('xpath=//textarea[@name="comments"]');
    await expect(textArea).toBeVisible();
    await textArea.fill("This is a test input for the text area.");
    await expect(textArea).toHaveValue(
      "This is a test input for the text area."
    );
  });
  // After the checkbox test, add a similar test for Radio Items.
  test("Test Radio button selection", async ({ page }) => {
    const radioEl = page.locator('xpath=//input[@value="rd1"]');
    await expect(radioEl).toBeVisible();
    await radioEl.check();
    await expect(radioEl).toBeChecked();
  });
  // Finally, submit the form by locating the input with type="submit" and triggering a click action.
  test("Submit the form", async ({ page }) => {
    const submitButton = page.locator('xpath=//input[@type="submit"]');
    await expect(submitButton).toBeVisible();
    await submitButton.click();
  });
});
