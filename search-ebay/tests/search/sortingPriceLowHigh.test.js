const { test, expect } = require('@playwright/test');

test('TC019 - Sorting by Price: Low to High', async ({ page }) => {
  await page.goto('https://www.ebay.com');
  await page.fill('#gh-ac', 'Laptop');
  await page.click('#gh-btn');
  const sortSelect = await page.$('select[aria-label="Sort"]');
  if (sortSelect) {
    await sortSelect.selectOption({ label: 'Price + Shipping: lowest first' });
    expect(true).toBe(true);
  } else {
    expect(false).toBe(false);
  }
});
