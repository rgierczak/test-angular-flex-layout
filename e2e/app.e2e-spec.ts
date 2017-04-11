import { TestAngularFlexLayoutPage } from './app.po';

describe('test-angular-flex-layout App', () => {
    let page: TestAngularFlexLayoutPage;

    beforeEach(() => {
        page = new TestAngularFlexLayoutPage();
    });

    it('should display message saying app works', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('app works!');
    });
});
