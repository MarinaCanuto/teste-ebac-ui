/// <reference types="cypress"/>

describe('Login na loja EBAC', () => {

    beforeEach(() => {
     cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
});
    afterEach(() => {
        cy.screenshot()
    });
    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('marina.teste@teste.com')
        cy.get('#password').type('senha@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, marina.teste (não é marina.teste? Sair)')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuario invalido', () => {
        cy.get('#username').type('marina.1@teste.com')
        cy.get('#password').type('senha@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('Contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    });

     it('Deve exibir uma mensagem de erro ao inserir senha invalida', () => {
        cy.get('#username').type('marina.teste@teste.com')
        cy.get('#password').type('@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
    });
})

