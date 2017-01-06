import { TourismSitePage } from './app.po';

describe('tourism-site App', function() {
  let page: TourismSitePage;

  beforeEach(() => {
    page = new TourismSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
