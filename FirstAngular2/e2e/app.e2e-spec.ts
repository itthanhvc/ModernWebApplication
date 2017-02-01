import { FirstAngular2Page } from './app.po';

describe('first-angular2 App', function() {
  let page: FirstAngular2Page;

  beforeEach(() => {
    page = new FirstAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
