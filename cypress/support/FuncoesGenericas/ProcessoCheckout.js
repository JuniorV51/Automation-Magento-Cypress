import SELETOR from "../ProcessoLogin/seletoresLogin";
import ITEM from "../ProcessoLogin/seletoresItem";
import {faker} from "@faker-js/faker";


function AdicionarItemCarrinho(){
    cy.get(ITEM.btnItem).click();
    cy.get(ITEM.tamanho).click();
    cy.get(ITEM.Cor).click();
    cy.get(ITEM.btnAddCarrinho).click();
    cy.wait(10000);
    cy.contains('My Cart').should('be.visible').click({force : true});
    cy.get(ITEM.btnCheckout).click();

};

function FinalizarCompra(){


    const PriemiroNome =faker.person.firstName();
    const UltimoNome = faker.person.lastName();
    const email = faker.internet.email();
    const Empresa = faker.company.name();
    const Endereco = faker.address.streetAddress();
    const cidade = faker.address.city();
    const cep = faker.address.zipCode();
    const telefone = faker.phone.number();;

    cy.get(ITEM.Email).type(email);
    cy.get(ITEM.PrimeiroNome).type(PriemiroNome);
    cy.get(ITEM.UltimoNome).type(UltimoNome);
    cy.get(ITEM.Empresa).type(Empresa);
    cy.get(ITEM.Endereco1).type(Endereco);
    cy.get(ITEM.Endereco2).type(Endereco);
    cy.get(ITEM.Endereco3).type(Endereco);
    cy.get(ITEM.Pais).select('BR');
    cy.get(ITEM.State).select('499');
    cy.get(ITEM.Cidade).type(cidade);
    cy.get(ITEM.CEP).type(cep);
    cy.get(ITEM.Numero).type(telefone);
    cy.wait(10000);
    cy.contains('Next').should('be.visible').click({force : true});

    return (PriemiroNome);

};

export {   
    AdicionarItemCarrinho,
    FinalizarCompra,
    
};