import { test, expect } from '@playwright/test';
import { getConfig } from '@utils/config';


test.describe("Simple test cases driven", async () => {
    test("Test 1: Test page User registration", async ({ page }) => {
        const testDataJson = getConfig ('01-test-data')
        const username = testDataJson.user;

        await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
        await page.getByLabel("Username").fill(username);

        console.log("hihi"); 
        // cách 2 debug bằng cách cắm debug (chấm đỏ) ở dòng này, ở terminal-> mở JavaScript Debug Terminal
        // Cách này gọi là cắm debug bằng cách chạy terminal

        //await page.waitForTimeout(3_000); // cách 1 debug bằng cách chờ timeout
    });
});
