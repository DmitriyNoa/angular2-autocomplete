import { browser, element, by } from 'protractor';

export class Angular2AutoCompletePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
