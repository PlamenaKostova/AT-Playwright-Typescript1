import { test, expect } from "@playwright/test";

test("Has h1 title", async ({ page }) => {
  await page.goto(
    "https://testpages.herokuapp.com/styled/basic-html-form-test.html"
  );
  const title = page.locator("xpath=//h1");
  await expect(title).toHaveText("Basic HTML Form Example");
});

test("Test Checkbox selection", async ({ page }) => {
  page.goto("https://testpages.herokuapp.com/styled/basic-html-form-test.html");

  const checkboxEl = page.locator('xpath=//input[@value="cb2"]');
  await expect(checkboxEl).toBeVisible();
  await checkboxEl.check();
  await expect(checkboxEl).toBeChecked();
});

test("Select dropdown option", async ({ page }) => {
  page.goto("https://testpages.herokuapp.com/styled/basic-html-form-test.html");

  const dropdown = page.locator('xpath=//select[@name="dropdown"]');
  await expect(dropdown).toBeVisible();
  await dropdown.selectOption("dd2");
  await expect(dropdown).toHaveValue("dd2");
});
