const { test, expect } = require('@playwright/test');

test('TC014 - Add to cart button appears on product page', async ({ page }) => {
  await page.goto('https://www.ebay.com');
  await page.fill('#gh-ac', 'TV');
  await page.click('#gh-btn');
  await page.click('li.s-item a.s-item__link');
  const addToCart = await page.$('a#atcRedesignId_btn');
  expect(addToCart).not.toBeNull();
});
