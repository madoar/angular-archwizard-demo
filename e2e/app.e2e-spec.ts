import { ArchwizarddemoPage } from './app.po';

describe('archwizarddemo App', () => {
  let page: ArchwizarddemoPage;

  beforeEach(() => {
    page = new ArchwizarddemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
