import { getHeader, getButton, getTable } from '../support/app.po';

describe('practica-final', () => {
  beforeEach(() => cy.visit('/'));
  it('should display header defined message', () => {
    getHeader().contains("Locations from 'The World Bank' API");
  });

  it('should display page CONTINENTS at home page by default', () => {
    getHeader().contains("CONTINENTS");
  });
  it('navigating by url to a not existing route must be redirected to /home', () => {
    cy.visit('/an-invalid-route')
    cy.url().should('include', '/home');
  });
});
