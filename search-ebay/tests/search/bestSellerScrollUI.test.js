const { test, expect } = require('@playwright/test');

test('TC013 - Scroll or navigation exists for long bestseller list', async ({ page }) => {
  await page.goto('https://www.ebay.com/deals');
  const scrollable = await page.$$('section[role="region"] .carousel__viewport');
  expect(scrollable.length).toBeGreaterThan(0);
});
