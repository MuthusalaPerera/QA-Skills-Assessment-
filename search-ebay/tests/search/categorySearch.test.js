const { test, expect } = require('@playwright/test');

test('TC010 - Category search through eBay navigation', async ({ page }) => {
  await page.goto('https://www.ebay.com/b/Electronics/bn_7000259124');
  const title = await page.title();
  expect(title.toLowerCase()).toContain('electronics');
});
