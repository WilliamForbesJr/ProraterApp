/// <reference types="cypress" />

describe('Full UI', function () {
    before(function () {
        cy.visit('https://gallant-feynman-45994b.netlify.com')
    })

    it('should load both divs', function () {
        cy.get('.prorater').should('be.ok')
    })
})

describe('Downgrade Input', function () {

    before(function () {
        cy.get('#downgrade-oldPlatformPrice').type('1500')
        cy.get('#downgrade-newPlatformPrice').type('700')
        cy.get('#downgrade-daysInMonth').type('30')
        cy.get('#downgrade-newPlatformDays').type('10')
        cy.get('#downgrade-submit').click()
    })

    it('should be visible on click', function () {
        cy.get('#downgrade-creditAmount').should('be.visible')
    })

    it('should show correct total', function () {
        cy.get('#downgrade-creditAmount').should('contain', '267')
    })

    it('should clear forms on submit', function () {
        cy.get('input').should('have.value', '')
    })
})

describe('Cancellation Input', function () {

    before(function () {
        cy.get('#cancel-platformPrice').type('1500')
        cy.get('#cancel-daysInMonth').type('30')
        cy.get('#cancel-oldPlatformDays').type('10')
        cy.get('#cancel-submit').click()
    })

    it('should be visible on click', function () {
        cy.get('#downgrade-creditAmount').should('be.visible')
    })

    it('should show correct total', function () {
        cy.get('#cancel-creditAmount').should('contain', '500')
    })

    it('should clear forms on submit', function () {
        cy.get('input').should('have.value', '')
    })
})