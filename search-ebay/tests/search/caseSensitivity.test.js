const { test, expect } = require('@playwright/test');
const { SearchPage } = require('../../pages/SearchPage');

test('TC007 - Case sensitivity in search', async ({ page }) => {
  const search = new SearchPage(page);
  await search.goto();
  await search.enterSearchText('laptop');
  await search.clickSearchButton();
  const lowerCaseCount = await search.getSearchResultsCount();

  await page.goto('https://www.ebay.com');
  await search.enterSearchText('Laptop');
  await search.clickSearchButton();
  const upperCaseCount = await search.getSearchResultsCount();

  expect(lowerCaseCount).toBeGreaterThan(0);
  expect(upperCaseCount).toBeGreaterThan(0);
  expect(Math.abs(upperCaseCount - lowerCaseCount)).toBeLessThanOrEqual(10); // allow small variation
});
