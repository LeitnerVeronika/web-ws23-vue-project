import { expect, test } from "@playwright/test";

// See here how to get started:
// https://playwright.dev/docs/intro

test.beforeEach(async ({ page }) => {
  await page.goto('/web-ws23-vue-project')
  /** add a product to the cart*/
  await page.waitForSelector('div.loading-message', { state: 'hidden' })
  const cartButton = await page.$(
    '#app > div > main > div > section > section:nth-child(2) > div:nth-child(6) > button:nth-child(1)'
  )
  await Promise.all([await cartButton.click()])

  /** navigate to cart page*/
  const linkText = 'Shopping Cart'
  const link = await page.$(`a:has-text("${linkText}")`) // Using :has-text() pseudo-selector
  await Promise.all([
    page.waitForNavigation(), // Wait for navigation to complete
    link.click() // Click on the link
  ])
  await expect(page).toHaveURL('https://leitnerveronika.github.io/web-ws23-vue-project/cart')
})

test('check navigation', async ({ page }) => {
  await expect(page.locator('a.logoLink')).toHaveText('Shop Assistant')
  await expect(page.locator('#app > header > nav > div.menu-items > a:nth-child(1)')).toHaveText(
    'Product Search'
  )
  await expect(page.locator('#app > header > nav > div.menu-items > a:nth-child(2)')).toHaveText(
    'Favorites'
  )
  await expect(page.locator('a.router-link-exact-active')).toHaveText('Shopping Cart')
})
test('check favorites page components', async ({ page }) => {
  await expect(page.locator('#app > div > section > section:nth-child(2) > a > h2')).toBeVisible()
  await expect(
    page.locator(
      '#app > div > section > section:nth-child(2) > div:nth-child(6) > button:nth-child(1) > svg.fa-star'
    )
  ).toBeVisible()
  await expect(
    page.locator(
      '#app > div > section > section:nth-child(2) > div:nth-child(6) > button:nth-child(2) > svg.fa-xmark'
    )
  ).toBeVisible()
})
