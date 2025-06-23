const { test, expect } = require('@playwright/test');

test('TC015 - Quantity selector is shown on product detail', async ({ page }) => {
  await page.goto('https://www.ebay.com');
  await page.fill('#gh-ac', 'TV');
  await page.click('#gh-btn');
  await page.click('li.s-item a.s-item__link');
  const quantity = await page.$('select#qtyTextBox');
  expect(quantity).not.toBeNull();
});
