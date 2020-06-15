Cypress.Commands.add('clicarShoppingCart' , () => {
    const href="http://automationpractice.com/index.php?controller=order";
    cy.get('div[class="shopping_cart"]').contains('Cart')
    cy.get('div[class="shopping_cart"]').children('a').invoke('attr','a',href).click();
    cy.get('div[id="center_column"]').within(() => {
        cy.get('h1[id="cart_title"]').contains('Shopping-cart summary').should('be.visible');
    })
})

Cypress.Commands.add('clicarHeaderLogo' , () => {
    const href="http://automationpractice.com";
    cy.get('div[id="header_logo"]').children('a').invoke('attr','a',href);
    cy.get('div[id="header_logo"]').click();
})

Cypress.Commands.add('clicarHeaderLogo' , () => {
    const href="http://automationpractice.com";
    cy.get('div[id="header_logo"]').children('a').invoke('attr','a',href);
    cy.get('div[id="header_logo"]').click();
})

Cypress.Commands.add('verificarCarrinho' , (trChild,productDescription,unitPrice,qty,total) => {
    cy.get('table[id="cart_summary"]').within(() => {
            cy.get(`tbody`).within(() => {
                cy.get(`tr:nth-child(${trChild})`).within(() => {
                    cy.get('td[class="cart_description"]').contains(productDescription)
                    cy.get('td[class="cart_unit"]').contains(unitPrice)
                    cy.get('td[class~="cart_quantity"]').children('input').invoke('attr','value',qty);
                    cy.get('td[class="cart_total"]').children('span[class="price"]').contains(total)
                }) 
             })  
        })
    })


Cypress.Commands.add('deletaItemdoCarrinho' , (trChild) => {
    cy.get('table[id="cart_summary"]').within(() => {
            cy.get(`tbody`).within(() => {
                cy.get(`tr:nth-child(${trChild})`).within(() => {
                    cy.get('td[class~="cart_delete"]').within(() => {
                        cy.get('i[class="icon-trash"]').click();
                    }) 
                }) 
            })  
        })
    })

Cypress.Commands.add('checaViewOption' , (viewOption) => {
    cy.get('div[id="center_column"]').within(() => {
            cy.get(`div[class="content_sortPagiBar"]`).within(() => {
                cy.get(`div[class^="sortPagiBar"]`).within(() => {
                    cy.get('li[id="grid"]').contains('Grid')
                    cy.get('li[id="list"]').contains('List')
                    cy.get(`li[id="${viewOption}"]`).invoke('attr','class','selected').should('be.visible')
                }) 
            })  
         })
    })

Cypress.Commands.add('verificarResultadoProdutosSearchGrid' , (liChild,itemName,priceItem) => {
    cy.get('ul[class~="product_list"]').within(() => {
        cy.get(`li:nth-child(${liChild})>div`).within(() => {
            //class referente a preço e botões
            cy.get(`div[class="right-block"]`).within(() => {
                cy.get('h5').contains(itemName);
                cy.get('div[itemprop="offers"]').contains(priceItem);
                //quando é grid a descrição não é exibida
                cy.get('p[class="product-desc"]').should('not.be.visible');
               
            })
        })
    })
})

Cypress.Commands.add('verificarResultadoProdutosSearchList' , (liChild,itemName,priceItem,descriptionItem) => {
    cy.get('ul[class~="product_list"]').within(() => {
        cy.get(`li:nth-child(${liChild})>div`).within(() => {
            cy.get('h5').contains(itemName);
            cy.get('div[itemprop="offers"]').contains(priceItem);
            cy.get('p[class="product-desc"]').should('be.visible').contains(descriptionItem);
        })
    })
})


Cypress.Commands.add('verificaMenuHeader' , (liChild,menuName) => {
    cy.get('ul[class~="sf-menu"]').within(() => {
        cy.get(`li:nth-child(${liChild})`).within(() => {
            cy.get(`a[title="${menuName}"]`).should('be.visible').contains(menuName);
       })
    })
})

Cypress.Commands.add('clicarMenuHeader' , (liChild,menuName) => {
    cy.get('ul[class~="sf-menu"]').should('be.visible').within(() => {
        cy.get(`li:nth-child(${liChild})`).within(() => {
            //cy.get(`a`).contains(menuName).click({force: true});
            cy.get(`a[title="${menuName}"]`).should('be.visible').contains(menuName).click({force: true});
       })
    })
})

Cypress.Commands.add('subCategoriaOption' , (liChild,subMenuName) => {
    cy.get('div[id="subcategories"]').should('be.visible').within(() => {
        cy.get('p[class="subcategory-heading"]').contains('Subcategories')
        cy.get('ul[class="clearfix"]').within(() => {
          cy.get(`li:nth-child(${liChild})`).contains(subMenuName)
        })
      })
})

Cypress.Commands.add('verificaSubMenusWomen' , (liChild,liChildSubMenu,subMenuName,liChild2,linkChildMenu) => {
    cy.get('ul[class~="sf-menu"]').within(() => {
        cy.get(`li:nth-child(${liChild})`).within(() => {
            cy.get(`ul[class^="submenu-container"]`).within(() => {
                cy.get(`li:nth-child(${liChildSubMenu})`).children('a').contains(subMenuName)
                cy.get(`li:nth-child(${liChildSubMenu})`).within(() => {
                    cy.get('ul').within(() => {
                        cy.get(`li:nth-child(${liChild2})`).within(() => {
                            cy.get('a').contains(linkChildMenu);
                        })
                    })
                })
            })
       })
    })
})

Cypress.Commands.add('verificaSubMenusDresses' , (liChild,liChildSubMenu,linkChildMenu) => {
    cy.get('ul[class~="sf-menu"]').within(() => {
        cy.get(`li:nth-child(${liChild})`).within(() => {
            cy.get(`ul[class^="submenu-container"]`).within(() => {
                cy.get(`li:nth-child(${liChildSubMenu})`).within(() => {
                    cy.get('a').contains(linkChildMenu);
                })
            })
       })
    })
})




Cypress.Commands.add('clicarTabelaProdutosTelaInicial' , (liChild,itemName,priceItem,buttonOption) => {
    cy.get('ul[id="homefeatured"]').within(() => {
        cy.get(`li:nth-child(${liChild})>div`).within(() => {
            //class referente a preço e botões
            cy.get(`div[class="right-block"]`).within(() => {
                cy.get('h5').contains(itemName);
                cy.get('div[itemprop="offers"]').contains(priceItem);
                cy.get('div[class="button-container"]').within(() => {
                    if (buttonOption === "Add to cart") {
                        cy.get('a[title="Add to cart"]').click();
                     } else {
                        cy.get('a[title="View"]').click();
                     }
                })
            })
        })
    })
})




