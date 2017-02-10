import { MMindFEPage } from './app.po';

describe('mmind-fe App', function() {
  let page: MMindFEPage;

  beforeEach(() => {
    page = new MMindFEPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
