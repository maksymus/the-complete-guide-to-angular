import { CompDatabindingFinalPage } from './app.po';

describe('comp-databinding-final App', () => {
  let page: CompDatabindingFinalPage;

  beforeEach(() => {
    page = new CompDatabindingFinalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
