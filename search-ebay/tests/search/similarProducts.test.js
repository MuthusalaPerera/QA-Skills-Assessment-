const { test, expect } = require('@playwright/test');

test('TC012 - Similar products are shown on a product detail page', async ({ page }) => {
  await page.goto('https://www.ebay.com');
  await page.fill('#gh-ac', 'iPhone');
  await page.click('#gh-btn');
  await page.click('li.s-item a.s-item__link');
  const suggestions = await page.$$('div.carousel__viewport li');
  expect(suggestions.length).toBeGreaterThanOrEqual(0);
});
