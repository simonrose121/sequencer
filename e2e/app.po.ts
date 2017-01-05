export class ScotchyScotchPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('scotchy-scotch-app h1')).getText();
  }
}
