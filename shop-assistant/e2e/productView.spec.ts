import { expect, test } from "@playwright/test";

// See here how to get started:
// https://playwright.dev/docs/intro

test('check product page components', async ({ page }) => {
  /** Navigate to product page and save name of product*/
  await page.goto('/web-ws23-vue-project')
  await page.waitForSelector('div.loading-message', { state: 'hidden' })
  const link = await page.$('#app > div > main > div > section > section:nth-child(2) > a > h2')
  const productName = await link.innerText()
  const marketContainer = await page.$(
    '#app > div > main > div > section > section:nth-child(2) > div.market-container'
  )
  const marketName = await marketContainer.innerText()
  const priceContainer = await page.$(
    '#app > div > main > div > section > section:nth-child(2) > div.price'
  )
  const priceRaw = await priceContainer.innerText()
  const price = priceRaw.replaceAll(' €', '€')
  const differenceContainer = await page.$(
    '#app > div > main > div > section > section:nth-child(2) > div:nth-child(5) > div'
  )
  const differenceRaw = await differenceContainer.innerText()
  const difference = differenceRaw.replaceAll(' %', '%')
  await Promise.all([
    page.waitForNavigation(), // Wait for navigation to complete
    link.click() // Click on the link
  ])
  await expect(page).toHaveURL(
    `https://leitnerveronika.github.io/web-ws23-vue-project/product/${productName}?market=${marketName}&productName=${productName}`
  )
  await expect(page.locator(`div.${marketName.toLowerCase()}`)).toBeVisible()
  await expect(page.locator(`#app > div > div > div > section > div:nth-child(3)`)).toContainText(
    price
  )
  await expect(
    page.locator(`#app > div > div > div > section > div:nth-child(4) > div`)
  ).toContainText(difference)
})
