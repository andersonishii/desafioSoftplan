/// <reference types="cypress" />

context('Desafio Web', () => {
  beforeEach(() => {
    cy.visit('http://automationpractice.com')
  })

  it('ST3 Exibir as categorias de produtos no menu da página inicial.', () => {
    //Criterio de aceite : Devem ser exibidos os menus: Woman, Dress e T-shirts;
    cy.verificaMenuHeader(1,'Women')
    cy.verificaMenuHeader(2,'Dresses')
    cy.verificaMenuHeader(3,'T-shirts')
   //Criterio de aceite : No menu Dresses devem ser exibidas as categorias CASUAL DRESSES EVENING DRESSES SUMMER DRESSES;
    cy.verificaSubMenusWomen(1,1,'Tops',1,'T-shirts')
    cy.verificaSubMenusWomen(1,1,'Tops',2,'Blouses')
    cy.verificaSubMenusWomen(1,1,'Tops',2,'Blouses')
    cy.verificaSubMenusWomen(1,2,'Dresses',1,'Casual Dresses')
    cy.verificaSubMenusWomen(1,2,'Dresses',2,'Evening Dresses')
    cy.verificaSubMenusWomen(1,2,'Dresses',3,'Summer Dresses')
    //Criterio de aceite : No menu Dresses devem ser exibidas as categorias CASUAL DRESSES EVENING DRESSES SUMMER DRESSES;
    cy.verificaSubMenusDresses(2,1,'Casual Dresses')
    cy.verificaSubMenusDresses(2,2,'Evening Dresses')
    cy.verificaSubMenusDresses(2,3,'Summer Dresses')
    //Criterio de aceite : Os menus devem ser clicáveis e ao acessá-los os produtos da categoria devem ser exibidos
    cy.clicarMenuHeader(1,'Women')
    //verifica se ao clicar na categoria Womem exibe a opção para clicar nas subcategorias
    cy.subCategoriaOption(1,'Tops')
    cy.subCategoriaOption(2,'Dresses')
    //verifica se trouxe resultados
    cy.verificarResultadoProdutosSearchGrid(1,'Faded Short Sleeve T-shirts','$16.51')
    cy.verificarResultadoProdutosSearchGrid(2,'Blouse','$27.00')
    cy.verificarResultadoProdutosSearchGrid(3,'Printed Dress','$26.00 ')
    cy.verificarResultadoProdutosSearchGrid(4,'Printed Dress','$50.99')
    cy.verificarResultadoProdutosSearchGrid(5,'Printed Summer Dress','$28.98 ')
    cy.verificarResultadoProdutosSearchGrid(6,'Printed Summer Dress','$30.50')
    cy.verificarResultadoProdutosSearchGrid(7,'Printed Chiffon Dress','$16.40')
    //Criterio de aceite : Os menus devem ser clicáveis e ao acessá-los os produtos da categoria devem ser exibidos
    cy.verificaMenuHeader(2,'Dresses')
    cy.clicarMenuHeader(2,'Dresses')
    cy.subCategoriaOption(1,'Casual Dresses')
    cy.subCategoriaOption(2,'Evening Dresses')
    cy.subCategoriaOption(3,'Summer Dresses')
    cy.verificarResultadoProdutosSearchGrid(1,'Printed Dress','$26.00 ')
    cy.verificarResultadoProdutosSearchGrid(2,'Printed Dress','$50.99')
    cy.verificarResultadoProdutosSearchGrid(3,'Printed Summer Dress','$28.98 ')
    cy.verificarResultadoProdutosSearchGrid(4,'Printed Summer Dress','$30.50')
    cy.verificarResultadoProdutosSearchGrid(5,'Printed Chiffon Dress','$16.40')
    //Criterio de aceite : Os menus devem ser clicáveis e ao acessá-los os produtos da categoria devem ser exibidos
    cy.verificaMenuHeader(3,'T-shirts')
    cy.clicarMenuHeader(3,'T-shirts')
    cy.verificarResultadoProdutosSearchGrid(1,'Faded Short Sleeve T-shirts','$16.51')
    
  })
})
