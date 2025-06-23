const { test, expect } = require('@playwright/test');
const { SearchPage } = require('../../pages/SearchPage');

test('TC005 - Repeated search returns results', async ({ page }) => {
  const search = new SearchPage(page);
  await search.goto();
  await search.enterSearchText('Laptop');
  await search.clickSearchButton();
  const firstCount = await search.getSearchResultsCount();

  await page.goto('https://www.ebay.com');
  await search.enterSearchText('Laptop');
  await search.clickSearchButton();
  const secondCount = await search.getSearchResultsCount();

  expect(secondCount).toBeGreaterThan(0);
  expect(secondCount).toBeGreaterThanOrEqual(firstCount - 5); 
});
