import { expect, test } from "@playwright/test";

test("study card starts in Spanish, flips to English, then shows answer buttons", async ({ page }) => {
  await page.goto("/study?category=animals");

  await expect(page.getByText("Card 1 / 2")).toBeVisible();
  await expect(page.locator(".flashcard-label")).toHaveText("Spanish");
  await expect(page.locator(".flashcard-text")).toHaveText("el gato");
  await expect(page.getByRole("button", { name: "I got it right" })).toHaveCount(0);
  await expect(page.getByRole("button", { name: "I got it wrong" })).toHaveCount(0);

  await page.locator(".flashcard").click();

  await expect(page.locator(".flashcard-label")).toHaveText("English");
  await expect(page.locator(".flashcard-text")).toHaveText("the cat");
  await expect(page.getByRole("button", { name: "I got it right" })).toBeVisible();
  await expect(page.getByRole("button", { name: "I got it wrong" })).toBeVisible();
});

test("answer buttons advance to next card after flip", async ({ page }) => {
  await page.goto("/study?category=animals");

  await page.locator(".flashcard").click();
  await page.getByRole("button", { name: "I got it right" }).click();

  await expect(page.getByText("Card 2 / 2")).toBeVisible();
  await expect(page.locator(".flashcard-text")).toHaveText("el perro");
  await expect(page.getByRole("button", { name: "I got it right" })).toHaveCount(0);
});

