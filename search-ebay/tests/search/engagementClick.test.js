const { test, expect } = require('@playwright/test');

test('TC017 - User engagement - clicking recommended products', async ({ page }) => {
  await page.goto('https://www.ebay.com');
  await page.fill('#gh-ac', 'headphones');
  await page.click('#gh-btn');
  const firstItem = await page.$('li.s-item a.s-item__link');
  expect(firstItem).not.toBeNull();
  await firstItem.click();
  expect(page.url()).toContain('itm');
});
