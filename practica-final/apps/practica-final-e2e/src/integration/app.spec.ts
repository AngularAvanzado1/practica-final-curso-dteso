import { getHeader } from '../support/app.po';

describe('practica-final', () => {
  beforeEach(() => cy.visit('/'));
  it('should display header defined message', () => {
    // Function helper example, see `../support/app.po.ts` file
    getHeader().contains("Geograpfics from 'The World Bank' API");
  });
});
