import { Locator, Page } from '@playwright/test'
export class LoginPage {
    readonly headingLoc: Locator;

    constructor(page: Page) {
        this.headingLoc = page.locator("#heading");
    }
}
