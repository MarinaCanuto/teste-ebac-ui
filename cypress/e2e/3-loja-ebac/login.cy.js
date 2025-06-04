/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json') // nome da const esta referenciando a pasta dentro de "fixtures"

describe('Login na loja EBAC', () => {

    beforeEach(() => {
     cy.visit('/minha-conta/')
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

    it('Deve fazer login com sucesso usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
    });
    it('Deve fazer login com sucesso usando fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario, { log: false})
            cy.get('#password').type(dados.senha, {log: false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')  
        })
    }); 

    it('Deve fazer login com sucesso usando Comandos Customizados', () => {
        cy.login('marina.teste@teste.com','senha@123')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, marina.teste (não é marina.teste? Sair)')
    });

 });