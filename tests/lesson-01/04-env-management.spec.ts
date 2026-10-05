import { test, expect } from '@playwright/test';

test.describe("Simple test cases driven", async () => {
    const testData = {
    user: {
        dev: 'dev-user@gmail.com',
        staging: 'staging-user@gmail.com',
        production: 'production-user@gmail.com',
    },
    favorites: {
        dev: ['Travelling', 'Cooking'],
        staging: ['Travelling', 'Cooking'],
        production: ['Travelling', 'Cooking'],
    }
};


    test("Test 1: Test page User registration", async ({ page }) => {
        const username = testData.user[process.env.ENV];

        await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
        await page.getByLabel("Username").fill(username);
    });
});
