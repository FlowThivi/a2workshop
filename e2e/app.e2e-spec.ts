import { HorizonPage } from './app.po';

describe('horizon App', function() {
  let page: HorizonPage;

  beforeEach(() => {
    page = new HorizonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
