/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
        produtosPage.visitarUrl()
    })

    it('Deve selecionar um produto da lista', () => {
        produtosPage.visitarUrl
        produtosPage.buscarProdutoLista('Zepelin Yoga Pant')  
        cy.get('.product_title').should('contain','Zepelin Yoga Pant' )
    })

    it('Deve buscar um produto com sucesso', () => {
       produtosPage.buscarProduto(produto) 
       cy.get('.product_title').should('contain', produto)
    })

    it('Deve visitar a pagina do produto', () => {
        produtosPage.visitarProduto('Zeppelin-Yoga-Pant')
        cy.get('.product_title').should('contain', 'Zeppelin Yoga Pant')

    })

    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 2
        produtosPage.visitarProduto('Abominable Hoodie')
        produtosPage.addProdutoCarrinho('S', 'Red', qtd)
        cy.get('.woocommerce-message').should('contain', qtd + ' × “Abominable Hoodie” foram adicionados no seu carrinho')
    })

    it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
    cy.fixture('produtos').then(dados => {
        produtosPage.visitarProduto(dados[1].nomeProduto)
        produtosPage.addProdutoCarrinho(
            dados[1].tamanho, 
            dados[1].cor, 
            dados[1].quantidade
    )
        cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)
})
    })
})