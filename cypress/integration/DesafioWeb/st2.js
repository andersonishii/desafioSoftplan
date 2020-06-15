/// <reference types="cypress" />

context('Desafio Web', () => {
  beforeEach(() => {
    cy.visit('http://automationpractice.com/index.php')
  })

  it('ST2 Utilizar o carrinho de compras para adicionar e remover produtos.', () => {
    cy.clicarShoppingCart();
    //Criterio de aceite : Quando o carrinho estiver vazio, deve ser exibida a mensagem: “Your shopping cart is empty”;
    cy.get('div[id="center_column"]').children('p').contains('Your shopping cart is empty.').should('have.css','background-color','rgb(254, 145, 38)').and('have.css','border-color','rgb(228, 117, 43)').and('have.css','color','rgb(255, 255, 255)')
    cy.clicarHeaderLogo();
    cy.clicarTabelaProdutosTelaInicial(1,'Faded Short Sleeve T-shirts','$16.51','Add to cart');
    //cy.get('span[id="layer_cart_product_title"]').should('be.visible').contains('Product successfully added to your shopping cart');
    
    //Criterio de aceite :Ao adicionar um produto ao carrinho, o usuário deve ser questionado se deseja continuar comprando ou finalizar a compra;
    cy.get('div[class="button-container"]').should('be.visible').children('span').contains('Continue shopping');
    cy.get('div[class="button-container"]').should('be.visible').children('a').contains('Proceed to checkout');
    //fecha tela para adicionar segundo produto no carrinho
    cy.get('span[title="Close window"]').should('be.visible').click();
    cy.clicarTabelaProdutosTelaInicial(2,'Blouse','$27.00','More');
    cy.get('button[type="submit"]').should('be.visible').contains('Add to cart').click();
    cy.get('div[class="button-container"]').should('be.visible').children('span').contains('Continue shopping');
    cy.get('div[class="button-container"]').should('be.visible').children('a').contains('Proceed to checkout').click();
    //Criterio de aceite :No carrinho deve ser exibido o preço unitário do produto, total e a quantidade;
    cy.verificarCarrinho(1,'Faded Short Sleeve T-shirts','$16.51',1,'$16.51')
    cy.verificarCarrinho(2,'Blouse','$27.00',1,'$27.00')
    //Criterio de aceite : Deve ser exibido o total da compra.
    cy.get('td[id="total_product"]').contains('$43.51')
    cy.deletaItemdoCarrinho(1)
    cy.get('td[id="total_product"]').should('be.visible').contains('$27.00')
    /*
    cy.deletaItemdoCarrinho(1)
    //Criterio de aceite :Quando o carrinho estiver vazio, deve ser exibida a mensagem: “Your shopping cart is empty”;
    cy.get('div[id="center_column"]').children('p').contains('Your shopping cart is empty.').should('have.css','background-color','rgb(254, 145, 38)').and('have.css','border-color','rgb(228, 117, 43)').and('have.css','color','rgb(255, 255, 255)')
    */
  })
})
