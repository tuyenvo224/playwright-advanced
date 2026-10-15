import { test, expect } from '@playwright/test';

test.describe("Simple test cases driven", async () => {
    test("Test 1: Test page User registration", async ({ page }) => {
        await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
        await expect(page.getByRole("heading")).toHaveText("User Registration");
    });

    test("Test 2: Test page Product page", async ({ page }) => {
        await page.goto("https://material.playwrightvn.com/02-xpath-product-page.html");
        await expect(page.getByRole("heading", { level: 1 })).toHaveText("Simple E-commerce");
    })

    test("Test 3: Test page Todo page", async ({ page }) => {
        await page.goto("https://material.playwrightvn.com/03-xpath-todo-list.html");
        await expect(page.getByRole("heading")).toHaveText("To-Do List");
    })
});
