import { expect, test } from "@playwright/test";

// See here how to get started:
// https://playwright.dev/docs/intro

test.beforeEach(async ({ page }) => {
  await page.goto('/web-ws23-vue-project')
  const linkText = 'Product Search'
  const link = await page.$(`a:has-text("${linkText}")`) // Using :has-text() pseudo-selector
  await Promise.all([
    page.waitForNavigation(), // Wait for navigation to complete
    link.click() // Click on the link
  ])
  await expect(page).toHaveURL(
    'https://leitnerveronika.github.io/web-ws23-vue-project/productSearch'
  )
})

test('check navigation', async ({ page }) => {
  await expect(page.locator('a.logoLink')).toHaveText('Shop Assistant')
  await expect(page.locator('a.router-link-exact-active')).toHaveText('Product Search')
  await expect(page.locator('#app > header > nav > div.menu-items > a:nth-child(2)')).toHaveText(
    'Favorites'
  )
  await expect(page.locator('#app > header > nav > div.menu-items > a:nth-child(3)')).toHaveText(
    'Shopping Cart'
  )
})
test('check search and filter', async ({ page }) => {
  await expect(page.locator('input.search')).toBeVisible()
  await expect(page.locator('input.search')).toBeEditable()
  await expect(page.locator('button.dropdown-button')).toBeVisible()
  await expect(page.locator('button.dropdown-button')).toBeEditable()
})
test('check product container', async ({ page }) => {
  await expect(page.locator('div.productName-container > h2')).toHaveText('Product')
  await expect(
    page.locator(
      '#app > div > main > div > section > section:nth-child(2) > div:nth-child(6) > button:nth-child(1) > svg.fa-cart-plus'
    )
  ).toBeVisible()
  await expect(
    page.locator(
      '#app > div > main > div > section > section:nth-child(2) > div:nth-child(6) > button:nth-child(2) > svg.fa-star'
    )
  ).toBeVisible()
})

test('search product', async ({ page }) => {
  const searchField = page.locator('input.search')
  const searchString = 'BILLA Eistee Wassermelone'
  await searchField.type(searchString)
  const submitButton = await page.$('button.button-icon')
  await submitButton.click()
  await page.waitForSelector('div.loading-message', { state: 'hidden' })

  await expect(
    page.locator('#app > div > main > div > section > section:nth-child(2) > a > h2')
  ).toContainText(searchString)
})
