import { test, expect } from '@playwright/test';
import * as fs from 'node:fs';
import * as path from 'node:path';
// import testDataJson from `@data/01-test-data-${process.env.ENV}.json`

const env = process.env.ENV || 'dev';
const raw = fs.readFileSync(path.resolve(`src/data/01-test-data-${env}.json`), 'utf-8');
const testDataJson = JSON.parse(raw);

test.describe("Simple test cases driven", async () => {
    test("Test 1: Test page User registration", async ({ page }) => {
        const username = testDataJson.user;

        await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
        await page.getByLabel("Username").fill(username);
    });
});
