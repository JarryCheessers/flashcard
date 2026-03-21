import { expect, test } from "@playwright/test";

test("home page shows welcome and core navigation buttons", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Welcome to Spanish Flashcards" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Study Mode" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Quiz Mode" })).toBeVisible();
  await expect(page.getByRole("main").getByRole("link", { name: "Stats" })).toBeVisible();
});

test("home Study Mode button routes to category selection", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Study Mode" }).click();

  await expect(page).toHaveURL(/\/select\/study$/);
  await expect(page.getByRole("heading", { name: "Choose a category" })).toBeVisible();
});

