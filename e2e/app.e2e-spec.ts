import { Angular2AutoCompletePage } from './app.po';

describe('angular2-auto-complete App', function() {
  let page: Angular2AutoCompletePage;

  beforeEach(() => {
    page = new Angular2AutoCompletePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
