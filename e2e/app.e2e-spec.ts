import { HotelAppPage } from './app.po';

describe('hotel-app App', () => {
  let page: HotelAppPage;

  beforeEach(() => {
    page = new HotelAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
