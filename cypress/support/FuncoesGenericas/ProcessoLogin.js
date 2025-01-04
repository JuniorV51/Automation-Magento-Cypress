import SELETOR from "../ProcessoLogin/seletoresLogin";
import {faker} from "@faker-js/faker";


//Funçoes auxiliares
 function cadastraNovoUsuario(){

    const nome =faker.person.firstName();
    const UltimoNome = faker.person.lastName();
    const email = faker.internet.email();
    const senha = Cypress.env('defaultPassword')
    Cypress.env('usuarioEmail', email);

    cy.get(SELETOR.campoNome).type(nome);
    cy.get(SELETOR.campoUltimoNome).type(UltimoNome);
    cy.get(SELETOR.campoEmail).type(email);
    cy.get(SELETOR.campoSenha).type(senha);
    cy.get(SELETOR.campoConfirmaSenha).type(senha);
    cy.get(SELETOR.btnCadastrar).click();

    return (email);

}
function LoginCadastroUsuario(){

    const senha = Cypress.env('defaultPassword')
    //Cypress.env('usuarioEmail'))
    //cy.get(SELETOR.loginEmail).type(Cypress.env('usuarioEmail'));
    cy.get(SELETOR.loginEmail,{timeout:10000}).click().type(Cypress.env('usuarioEmail'));
    cy.get(SELETOR.loginSenha).type(senha);
    cy.get(SELETOR.btnLogin).click();
}


export {   
    cadastraNovoUsuario,
    LoginCadastroUsuario,
   
}