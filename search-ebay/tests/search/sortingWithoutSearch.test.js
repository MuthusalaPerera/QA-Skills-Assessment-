const { test, expect } = require('@playwright/test');

test('TC020 - Sorting without input does nothing', async ({ page }) => {
  await page.goto('https://www.ebay.com');
  const sortSelect = await page.$('select[aria-label="Sort"]');
  expect(sortSelect).toBeNull(); 
});
