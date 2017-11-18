import { CompDatabindingPage } from './app.po';

describe('comp-databinding App', () => {
  let page: CompDatabindingPage;

  beforeEach(() => {
    page = new CompDatabindingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
