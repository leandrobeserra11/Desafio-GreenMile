/// <reference types="cypress" />

describe('Analizando componente square', ()=>{
    it('O square após pressionado por 500ms deve ter 225x225', ()=>{
        cy.visit("./src/index.html")

        cy.get('[data-cy=square]')
        .trigger('pointerdown', { button:0 })
        .wait(500)
        .trigger('pointerup', { button:0 })
       
        cy.get('[data-cy=square]').should('have.css','width', '225px')
        cy.get('[data-cy=square]').should('have.css','height', '225px')
    })

    it('O square após pressionado novamente por 500ms deve voltar ao tamanho original de 90x90', ()=>{
        cy.get('[data-cy=square]')
        .trigger('pointerdown', { button:0 })
        .wait(500)
        .trigger('pointerup', { button:0 })
      
        cy.get('[data-cy=square]').should('have.css','width', '90px')
        cy.get('[data-cy=square]').should('have.css','height', '90px')
    })
})