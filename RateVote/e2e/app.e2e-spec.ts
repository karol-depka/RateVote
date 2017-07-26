import { RateVotePage } from './app.po';

describe('rate-vote App', () => {
  let page: RateVotePage;

  beforeEach(() => {
    page = new RateVotePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
