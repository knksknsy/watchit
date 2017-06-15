import { WatchItPage } from './app.po';

describe('watch-it App', () => {
  let page: WatchItPage;

  beforeEach(() => {
    page = new WatchItPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
