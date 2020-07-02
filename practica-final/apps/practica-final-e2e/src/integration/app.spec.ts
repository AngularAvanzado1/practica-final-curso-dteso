import { getGreeting } from '../support/app.po';

describe('practica-final', () => {
  beforeEach(() => cy.visit('/'));
  it('should display header defined message', () => {
    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains("Geograpfics from 'The World Bank' API");
  });
});
