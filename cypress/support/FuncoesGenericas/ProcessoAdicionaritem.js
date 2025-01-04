
import ITEM from "../ProcessoLogin/seletoresItem";
function adicionarItem (){
    cy.get(ITEM.Btnitem1).click();
    cy.get(ITEM.tamanho1).click();
    cy.get(ITEM.cor3).click();
    cy.get(ITEM.Qtd1).clear();
    cy.get(ITEM.Qtd1).type('3');
    cy.get(ITEM.btnAddCarrinho).click();

};


function ItemCarrinho(){
    cy.get(ITEM.btnItem).click();
    cy.get(ITEM.tamanho).click();
    cy.get(ITEM.Cor).click();
    cy.get(ITEM.btnAddCarrinho).click();
    cy.wait(10000);
    cy.contains('My Cart').should('be.visible').click({force : true});
    
};

export {   
    adicionarItem,
    ItemCarrinho

};