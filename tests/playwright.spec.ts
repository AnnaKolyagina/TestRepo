import { test, expect } from '@playwright/test';

test.only('add to cart test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/', {timeout: 60_000, waitUntil: "load"});
  await page.locator('[data-test="login-credentials"]').click();
  //await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  //await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  const addToCartText = await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').textContent();
  expect(addToCartText).toEqual('Add to cart');
  await expect(page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')).toContainText('Add to cart');
});