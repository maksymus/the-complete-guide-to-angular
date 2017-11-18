import { browser, by, element } from 'protractor';

export class CompDatabindingFinalPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
