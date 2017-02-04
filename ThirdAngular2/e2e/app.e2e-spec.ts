import { ServiceExerciePage } from './app.po';

describe('service-exercie App', function() {
  let page: ServiceExerciePage;

  beforeEach(() => {
    page = new ServiceExerciePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
