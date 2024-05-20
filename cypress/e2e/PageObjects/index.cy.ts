import { Given } from 'cypress-cucumber-preprocessor/steps';

Given('I visit the page', () => {
  cy.visit('localhost:4200');
});
