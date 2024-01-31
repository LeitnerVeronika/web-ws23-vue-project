import { test, expect } from '@playwright/test';
import { expectTypeOf } from "vitest";

// See here how to get started:
// https://playwright.dev/docs/intro

test.beforeEach(async ({ page }) => {
  await page.goto('/web-ws23-vue-project');
  await expect(page).toHaveURL("https://leitnerveronika.github.io/web-ws23-vue-project/")});
test('check navigation', async ({ page }) => {
  await expect(page.locator('a.logoLink')).toHaveText('Shop Assistant');
  await expect(page.locator('#app > header > nav > div.menu-items > a:nth-child(1)')).toHaveText('Product Search');
  await expect(page.locator('#app > header > nav > div.menu-items > a:nth-child(2)')).toHaveText('Favorites');
  await expect(page.locator('#app > header > nav > div.menu-items > a:nth-child(3)')).toHaveText('Shopping Cart');
})

test('check search and filter', async ({ page }) => {
  await expect(page.locator('input.search')).toBeVisible();
  await expect(page.locator('input.search')).toBeEditable();
  await expect(page.locator('button.dropdown-button')).toBeVisible();
  await expect(page.locator('button.dropdown-button')).toBeEditable();
})

test('check product container', async ({ page }) => {
  await expect(page.locator('div.productName-container > h2')).toHaveText('Product');
  await expect(page.locator('#app > div > main > div > section > section:nth-child(1) > div.productName-container > button:nth-child(2)')).toBeVisible();
  await expect(page.locator('#app > div > main > div > section > section:nth-child(1) > div.productName-container > button:nth-child(2) > svg.fa-angle-up')).toBeVisible();
  await expect(page.locator('#app > div > main > div > section > section:nth-child(1) > div.productName-container > button.custom-button.sort-down > svg')).toBeVisible();
  await expect(page.locator('#app > div > main > div > section > section:nth-child(2) > div:nth-child(6) > button:nth-child(1) > svg.fa-cart-plus')).toBeVisible();
  await expect(page.locator('#app > div > main > div > section > section:nth-child(2) > div:nth-child(6) > button:nth-child(2) > svg.fa-star')).toBeVisible();
  await expect(page.locator('#app > div > main > div > section > section:nth-child(2) > div:nth-child(6) > button:nth-child(2) > svg.fa-star')).toHaveAttribute('data-prefix', 'far');
})
