import { getButton } from '../support/app.po';

describe('country', () => {
  beforeEach(() => cy.visit('/country/ARG'));
  it('navigating to country components shoul renderize a button "Back" to navigate previous route /region', () => {
    getButton().contains('Back').click();
    cy.url().should('include', '/region');
  });
  it('form region/ should be able to go /home', () => {
    getButton().contains('Home').click();
    cy.url().should('include', '/home');
  });
});
