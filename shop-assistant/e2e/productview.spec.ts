import { test, expect } from '@playwright/test';

// See here how to get started:
// https://playwright.dev/docs/intro
test('check product page components', async ({ page }) => {
  await page.goto('web-ws23-vue-project/product/BILLA%20Eistee%20Wassermelone?market=BILLA&productName=BILLA%20Eistee%20Wassermelone');
  await expect(page.locator('h1.product-header')).toHaveText('BILLA Eistee Wassermelone');
  await expect(page.locator('div.billa')).toBeVisible();
  await expect(page.locator('div.billa')).toContainText('BILLA');
  await expect(page.locator('div.vegan')).toBeVisible();
  await expect(page.locator('div.vegan')).toContainText('vegan');
})
