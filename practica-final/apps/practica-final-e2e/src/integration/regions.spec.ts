import { getHeader, getButton, getTable } from '../support/app.po';

describe('regions', () => {
  beforeEach(() => cy.visit('/region/LCN'));
  it('on navigate /region should change table title to REGIONS and url must contain /region', () => {
    getHeader().contains("REGIONS");
    cy.url().should('include', '/region');
  });
  it('in regions page should show render a table with header', () => {
    getTable().find('thead');
  });
  it('in regions page should show render a table with body', () => {
    getTable().find('tr');
  });
  it('should show a home button', () => {
    getButton().contains("Home").click();
    cy.url().should('include', '/home');
  });
  after(() => cy.visit('/'));
  it('each view/next button of table should be renderized and navigate from /region to his corresponding /country', () => {
    getTable().get('.action-button-class').contains('View / Next').click();
    cy.url().should('include', '/country');
  });
});
