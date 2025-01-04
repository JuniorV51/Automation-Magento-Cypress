/*Acesse a página do magento 2, e navegue até um produto do seu interesse.Adicione este produto ao carrinho, especificando sua cor, tamanho e quantidade desejada.
Volte ao menu principal da aplicação e adicione mais um item ao carrinho validando também a cor,
tamanho e quantidade.
*/


import{adicionarItem, ItemCarrinho} from'../../support/FuncoesGenericas/ProcessoAdicionaritem'
import ITEM from '../../support/ProcessoLogin/seletoresItem';


describe("Suite de testes, - Adicionando 2 item no carrinho.", ()=>{

    beforeEach(()=>{
        cy.visit(Cypress.config('baseUrl'));
    
    })

        it("CE01: Adiconar 2 item no carrinho.", () =>{
            //Pesquisar item
            cy.get(ITEM.pesquisa).type("Aether Gym Pant{enter}" );
            adicionarItem();
            cy.contains('Home',{timeout:15000}).should('be.visible').click();
            cy.get(ITEM.pesquisa).type("Hot Sellers{enter}" );
            ItemCarrinho();
            cy.contains('View and Edit Cart').should('be.visible').click();

        });

});