class SearchPage {
  constructor(page) {
    this.page = page;
    this.searchInput = 'input#gh-ac';
    this.searchButton = 'input#gh-btn';
    this.resultItems = 'li.s-item';
  }

  async goto() {
    await this.page.goto('https://www.ebay.com');
  }

  async enterSearchText(text) {
    await this.page.fill(this.searchInput, text);
  }

  async clickSearchButton() {
    await this.page.click(this.searchButton);
  }

  async getSearchResultsCount() {
    return (await this.page.$$(this.resultItems)).length;
  }
}

module.exports = { SearchPage };
