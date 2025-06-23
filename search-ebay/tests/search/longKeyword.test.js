const { test, expect } = require('@playwright/test');
const { SearchPage } = require('../../pages/SearchPage');

test('TC006 - Long keyword search', async ({ page }) => {
  const search = new SearchPage(page);
  await search.goto();
  await search.enterSearchText('Apple MacBook Pro 16 inch 2023 Model with M3 chip');
  await search.clickSearchButton();
  const resultCount = await search.getSearchResultsCount();
  expect(resultCount).toBeGreaterThan(0);
});
