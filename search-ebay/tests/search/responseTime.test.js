const { test, expect } = require('@playwright/test');
const { SearchPage } = require('../../pages/SearchPage');

test('TC011 - Response time should be under 2 seconds', async ({ page }) => {
  const search = new SearchPage(page);
  await search.goto();
  const start = Date.now();
  await search.enterSearchText('Laptop');
  await search.clickSearchButton();
  await search.getSearchResultsCount();
  const duration = Date.now() - start;
  expect(duration).toBeLessThanOrEqual(2000);
});
