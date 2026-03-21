import { expect, test } from "@playwright/test";

test("category selection shows all categories and continues to study", async ({ page }) => {
  await page.goto("/select/study");

  await expect(page.locator(".select-card-title", { hasText: "Animals" })).toBeVisible();
  await expect(page.locator(".select-card-title", { hasText: "Food" })).toBeVisible();
  await expect(page.locator(".select-card-title", { hasText: "Verbs" })).toBeVisible();

  const continueButton = page.getByRole("button", { name: "Continue" });
  await expect(continueButton).toBeDisabled();

  await page.locator(".select-card", { hasText: "Animals" }).click();
  await expect(continueButton).toBeEnabled();
  await continueButton.click();

  await expect(page).toHaveURL(/\/study\?category=animals$/);
});

