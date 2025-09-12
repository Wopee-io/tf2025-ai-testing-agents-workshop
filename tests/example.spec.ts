import { Wopee } from "@wopee-io/wopee.pw";
import { test, expect } from '@playwright/test';

let wopee: Wopee = new Wopee();



test('has title', async ({ page }) => {
  await page.goto('https://wopee.io/');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Wopee.io/);
});

test('get started link', async ({ page }, testInfo) => {
  
  await wopee.startSuite(process.env.WOPEE_SUITE_NAME || `Simple Example ${new Date().toLocaleString()}`);
  await wopee.startScenario(test.info().title, testInfo);
  
  await page.goto(process.env.WOPEE_PROJECT_URL || 'https://wopee.io/');
  await wopee.trackFullPage({ stepName: "Check Home Page", page });

  await wopee.stopScenario();
  

});
