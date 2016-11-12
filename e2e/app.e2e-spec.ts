import { TryAgainPage } from './app.po';

describe('try-again App', function() {
  let page: TryAgainPage;

  beforeEach(() => {
    page = new TryAgainPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
