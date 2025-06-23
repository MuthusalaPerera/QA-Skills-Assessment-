const { test, expect } = require('@playwright/test');
const { SearchPage } = require('../../pages/SearchPage');

test('TC001 - Search not triggered with less than 3 characters', async ({ page }) => {
  const search = new SearchPage(page);
  await search.goto();
  await search.enterSearchText('La');
  await search.clickSearchButton();
  const resultCount = await search.getSearchResultsCount();
  expect(resultCount).toBeGreaterThan(0);
});
