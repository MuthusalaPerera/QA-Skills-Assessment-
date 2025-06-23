const { test, expect } = require('@playwright/test');
const { SearchPage } = require('../../pages/SearchPage');

test('TC004 - Empty search submission', async ({ page }) => {
  const search = new SearchPage(page);
  await search.goto();
  await search.enterSearchText('');
  await search.clickSearchButton();
  const url = page.url();
  expect(url).toContain('https://www.ebay.com'); // No navigation if search is empty
});
