const { test, expect } = require('@playwright/test');
const { SearchPage } = require('../../pages/SearchPage');

test('TC002 - Valid keyword search', async ({ page }) => {
  const search = new SearchPage(page);
  await search.goto();
  await search.enterSearchText('Laptop');
  await search.clickSearchButton();
  const resultCount = await search.getSearchResultsCount();
  expect(resultCount).toBeGreaterThan(0);
});
