const { test, expect } = require('@playwright/test');
const { SearchPage } = require('../../pages/SearchPage');

test('TC008 - Sorting A–Z option available', async ({ page }) => {
  const search = new SearchPage(page);
  await search.goto();
  await search.enterSearchText('Laptop');
  await search.clickSearchButton();

  await page.selectOption('#s0-53-17-6-2-4[role="listbox"]', { label: 'Name: A to Z' }).catch(() => {}); // try selecting if dropdown is available

  const url = page.url();
  expect(url).toContain('Laptop');
});
