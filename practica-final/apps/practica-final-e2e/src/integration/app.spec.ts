import { getHeader, getButton, getTable } from '../support/app.po';

describe('practica-final', () => {
  describe('home(continents)', () => {
    beforeEach(() => cy.visit('/'));
    it('should display header defined message', () => {
      getHeader().contains("Geograpfics from 'The World Bank' API");
    });
    it('should show a home button', () => {
      getButton().contains("Home");
    });
    it('should display page CONTINENTS at home page by default', () => {
      getHeader().contains("CONTINENTS");
    });
    it('navigating by url to a not existing route must be redirected to /home', () => {
      cy.url().should('include', '/home');
    });
    it('in home page (continents) should show render a table with header', () => {
      getTable().find('thead');
    });
    it('in home page (continents) should show render a table with body', () => {
      getTable().find('tr');
    });
    it('each view/next button of table should be renderized and navigate from home to his corresponding /region', () => {
      getTable().get('.action-button-class').contains('View / Next').click();
      cy.url().should('include', '/region');
    });
  });


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
    it('each view/next button of table should be renderized and navigate from /region to his corresponding /country', () => {
      getTable().get('.action-button-class').contains('View / Next').click();
      cy.url().should('include', '/country');
    });
  });


  describe('country', () => {

    it('navigating to country components shoul renderize a button "Back" to navigate previous route /region', () => {
      cy.visit('/country/ARG');
      getButton().contains('Back').click();
      cy.url().should('include', '/region');
    });
    it('form region/ should be able to go /home', () => {
      cy.visit('/region/LCN');
      getButton().contains('Home').click();
      cy.url().should('include', '/home');
    });
  });
});
