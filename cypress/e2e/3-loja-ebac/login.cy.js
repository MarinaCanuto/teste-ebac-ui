/// <reference types="cypress"/>

describe('Login na loja EBAC', () => {
    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('marina.teste@teste.com')
        cy.get('#password').type('senha@123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, marina.teste (não é marina.teste? Sair)')
    })
})
