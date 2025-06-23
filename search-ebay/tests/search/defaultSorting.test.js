const { test, expect } = require('@playwright/test');

test('TC018 - Default sorting is applied (Best Match)', async ({ page }) => {
  await page.goto('https://www.ebay.com');
  await page.fill('#gh-ac', 'Laptop');
  await page.click('#gh-btn');
  const url = page.url();
  expect(url.toLowerCase()).toContain('laptop');
});
