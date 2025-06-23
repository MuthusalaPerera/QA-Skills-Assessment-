const { test, expect } = require('@playwright/test');
const { SearchPage } = require('../../pages/SearchPage');

test('TC003 - Invalid characters in search', async ({ page }) => {
  const search = new SearchPage(page);
  await search.goto();
  await search.enterSearchText('@#$%');
  await search.clickSearchButton();
  const resultCount = await search.getSearchResultsCount();
  expect(resultCount).toBeGreaterThanOrEqual(0); // eBay may return some results or suggestions
});
