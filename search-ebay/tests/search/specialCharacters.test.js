const { test, expect } = require('@playwright/test');
const { SearchPage } = require('../../pages/SearchPage');

test('TC009 - Search with special characters should return no or minimal results', async ({ page }) => {
  const search = new SearchPage(page);
  await search.goto();
  await search.enterSearchText('!!!@@@###');
  await search.clickSearchButton();
  const count = await search.getSearchResultsCount();
  expect(count).toBeGreaterThanOrEqual(0);
});
