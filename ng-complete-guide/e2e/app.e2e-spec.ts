import { NgCompleteGuidePage } from './app.po';

describe('ng-complete-guide App', () => {
  let page: NgCompleteGuidePage;

  beforeEach(() => {
    page = new NgCompleteGuidePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
