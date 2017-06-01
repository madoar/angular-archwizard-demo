import { ArchwizardDemoPage } from './app.po';

describe('archwizard-demo App', () => {
  let page: ArchwizardDemoPage;

  beforeEach(() => {
    page = new ArchwizardDemoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
