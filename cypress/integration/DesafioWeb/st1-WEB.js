/// <reference types="cypress" />

context('Desafio Web', () => {
  beforeEach(() => {
    cy.visit('http://automationpractice.com/index.php')
  })

  it('ST1 Consultar produtos no site.', () => {
    const termoExistente="dress";
    const termoNaoExistente="Procurar por termo que nao existe";
    cy.get('input[id="search_query_top"]').invoke('attr','placeholder','Search').click().type(`${termoNaoExistente}{enter}`);7
    //Criterio de aceite :Quando nenhum produto for encontrado, deve ser exibida a mensagem: "No results were found for your search '{TEXTO DA PESQUISA}'";
    cy.get('div[id="center_column"]').children('p').contains(`No results were found for your search "${termoNaoExistente}"`).should('have.css','background-color','rgb(254, 145, 38)').and('have.css','border-color','rgb(228, 117, 43)').and('have.css','color','rgb(255, 255, 255)')
    //Criterio de aceite :Ao realizar uma pesquisa, deve ser exibido o total de resultados;
    cy.get('span[class="heading-counter"]').contains('0 results have been found.');
    //Criterio de aceite :Deve ser possível consultar os produtos cadastrados por meio de um campo de pesquisa;;
    cy.get('input[id="search_query_top"]').invoke('attr','placeholder','Search').click().type(`{selectall}{del}${termoExistente}{enter}`);
    //Criterio de aceite :Os resultados devem ser exibidos em formato de grid e lista Nesse caso abaixo será verificado se o grid está selecionado;
    cy.checaViewOption('grid')
    //Criterio de aceite :Ao realizar uma pesquisa, deve ser exibido o total de resultados;
    cy.get('span[class="heading-counter"]').contains('7 results have been found');
    //Criterio de aceite :Deve ser exibido o total de itens e quantidade por página.
    cy.get('div[class="product-count"]').contains('Showing 1 - 7 of 7 items');
    cy.verificarResultadoProdutosSearchGrid(1,'Printed Summer Dress','$28.98 ')
    cy.verificarResultadoProdutosSearchGrid(2,'Printed Dress','$50.99')
    cy.verificarResultadoProdutosSearchGrid(3,'Printed Summer Dress','$30.50')
    cy.verificarResultadoProdutosSearchGrid(4,'Printed Chiffon Dress','$16.40')
    cy.verificarResultadoProdutosSearchGrid(5,'Printed Dress','$26.00 ')
    cy.verificarResultadoProdutosSearchGrid(6,'Faded Short Sleeve T-shirts','$16.51')
    cy.verificarResultadoProdutosSearchGrid(7,'Blouse','$27.00')
    cy.get('li[id="list"]').click({force:true})
        //Criterio de aceite :Os resultados devem ser exibidos em formato de grid e lista. Nesse caso abaixo será verificado se o list está selecionado;
    cy.checaViewOption('list')
    cy.verificarResultadoProdutosSearchList(1,'Printed Summer Dress','$28.98 ','Long printed dress with thin adjustable straps. V-neckline and wiring under the bust with ruffles at the bottom of the dress.')
    cy.verificarResultadoProdutosSearchList(2,'Printed Dress','$50.99','Printed evening dress with straight sleeves with black thin waist belt and ruffled linings.')
    cy.verificarResultadoProdutosSearchList(3,'Printed Summer Dress','$30.50','Sleeveless knee-length chiffon dress. V-neckline with elastic under the bust lining.')
    cy.verificarResultadoProdutosSearchList(4,'Printed Chiffon Dress','$16.40','Printed chiffon knee length dress with tank straps. Deep v-neckline.')
    cy.verificarResultadoProdutosSearchList(5,'Printed Dress','$26.00 ','100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom.')
    cy.verificarResultadoProdutosSearchList(6,'Faded Short Sleeve T-shirts','$16.51',`Faded short sleeve t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!`)
    cy.verificarResultadoProdutosSearchList(7,'Blouse','$27.00','Short sleeved blouse with feminine draped sleeve detail.')
  })
})