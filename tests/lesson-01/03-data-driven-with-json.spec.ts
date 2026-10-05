import { test, expect } from '@playwright/test';
import  testDataJson  from '@data/01-data.json';


test.describe("Read JSON file", async () => {
    testDataJson.forEach(item => {
        test(`Test heading of ${item.name}`, async ({ page }) => {
            await page.goto(item.url);
            let headingLoc = page.getByRole("heading");
            if (item.headingLevel) {
                headingLoc = page.getByRole("heading", { level: item.headingLevel });
            }
            await expect(headingLoc).toHaveText(item.expected);



            //await expect(page.getByRole("heading")).toHaveText(item.expected);
        });
    });
});
