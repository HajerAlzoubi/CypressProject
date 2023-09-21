/// <reference types= "cypress" />

const expectedcurrency = "SAR"
const expectedlanguage = "en"

describe('Almosafer Test Cases', () => {
  it.skip('Check the Currency is SAR', () => {
    cy.visit('https://global.almosafer.com/en')
    cy.get('.cta__saudi').click()

    cy.get('[data-testid="Header__CurrencySelector"]').invoke('text').should('contain',expectedcurrency)
  })

  it('check the Language', () => {
    cy.visit('https://global.almosafer.com/en')
    cy.get('.cta__saudi').click()
    cy.get('html').should('have.attr','lang',expectedlanguage)
    
  });
})