import { Organizer.LoaderPage } from './app.po';

describe('organizer.loader App', () => {
  let page: Organizer.LoaderPage;

  beforeEach(() => {
    page = new Organizer.LoaderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
