import { test, expect } from '@playwright/test';
import { getConfig } from '@utils/config-2';


test.describe("Simple test cases driven", async () => {
    test("Test 1: Test page User registration", async ({ page }) => {
        const testDataJson = getConfig ('02-test-data','case_1')
        const username = testDataJson.user;

        await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
        await page.getByLabel("Username").fill(username);

        console.log("hihi"); 

        //await page.waitForTimeout(3_000); 
    });

    test("Test 2: Test page User registration", async ({ page }) => {
        const testDataJson = getConfig ('02-test-data','case_2')
        const username = testDataJson.user;

        await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
        await page.getByLabel("Username").fill(username);

        console.log("hihi"); 

        //await page.waitForTimeout(3_000); 
    });
});
