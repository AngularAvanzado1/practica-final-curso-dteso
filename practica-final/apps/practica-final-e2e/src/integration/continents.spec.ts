import { getHeader, getButton, getTable, getLink } from '../support/app.po';

describe('cotinents', () => {
  beforeEach(() => cy.visit('/'));
  it('should display page CONTINENTS as table title', () => {
    getHeader().contains("CONTINENTS");
  });
  it('in home page (continents) should show render a table with header', () => {
    getTable().find('thead');
  });
  it('in home page (continents) should show render a table with body', () => {
    getTable().find('tr');
  });
  it('should show a home button', () => {
    getButton().contains("Home");
  });
  it('each view/next button of table should be renderized and navigate from home to his corresponding /region', () => {
    getTable().get('.action-button-class').contains('View / Next').click();
    cy.url().should('include', '/region');
  });
  it('link must redirect to /geographics page', () => {
    getLink().click();
    cy.url().should('include', '/geographics');
  });
});
