import { HeimdallPage } from './app.po';

describe('heimdall App', function() {
  let page: HeimdallPage;

  beforeEach(() => {
    page = new HeimdallPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
