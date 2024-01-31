import { test, expect } from '@playwright/test';

// See here how to get started:
// https://playwright.dev/docs/intro
test('check search page components', async ({ page }) => {
  await page.goto('/web-ws23-vue-project/productSearch');
  await expect(page.locator('input.search')).toBeVisible();
  await expect(page.locator('input.search')).toBeEditable();
  await expect(page.locator('button.dropdown-button')).toBeVisible();
  await expect(page.locator('button.dropdown-button')).toBeEditable();
  await expect(page.locator('div.productName-container > h2')).toHaveText('Product');
  await expect(page.locator('#app > div > main > div > section > section:nth-child(2) > div:nth-child(6) > button:nth-child(1) > svg.fa-cart-plus')).toBeVisible();
  await expect(page.locator('#app > div > main > div > section > section:nth-child(2) > div:nth-child(6) > button:nth-child(2) > svg.fa-star')).toBeVisible();

})