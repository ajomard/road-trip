import { RoadTripPage } from './app.po';

describe('road-trip App', () => {
  let page: RoadTripPage;

  beforeEach(() => {
    page = new RoadTripPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
