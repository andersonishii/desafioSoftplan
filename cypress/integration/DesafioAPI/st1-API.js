/// <reference types="cypress" />

context('Desafio API', () => {
  beforeEach(() => {
    
  })

  it('ST1 Permitir o cadastro de livros.', () => {
    const item=
    {
      "ID": 0,
      "Title": "Titulo Teste Anderson",
      "Description": "Descrição Teste Anderson",
      "PageCount": 0,
      "Excerpt": "Resumo Teste Anderson",
      "PublishDate": 
      "2020-06-15T02:06:53.563Z"
    }
    const registraLivroAPI =   cy.request('POST','https://fakerestapi.azurewebsites.net/api/Books',item);
    registraLivroAPI.its('status').should('be.eql', 200);
  })
})
