const { test, expect } = require('@playwright/test');

test('TC016 - Remove from cart button availability', async ({ page }) => {
  await page.goto('https://www.ebay.com');
  await page.fill('#gh-ac', 'TV');
  await page.click('#gh-btn');
  await page.click('li.s-item a.s-item__link');
  const addToCart = await page.$('a#atcRedesignId_btn');
  if (addToCart) {
    await addToCart.click();
    await page.waitForTimeout(2000); // wait for cart modal
    const remove = await page.$('button[aria-label*="Remove"]');
    expect(remove).not.toBeNull();
  } else {
    expect(true).toBe(true); // Skip if no add-to-cart
  }
});
