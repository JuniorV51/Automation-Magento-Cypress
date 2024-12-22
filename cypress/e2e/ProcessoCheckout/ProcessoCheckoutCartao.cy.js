/*Dado que usuario tenha acesso a plataforma com suas credencias e ele seleciona 
um produto atraves de uma pesquisa fornecida, ao selecionar o produto e suas caracterias
deve ser possivel alterara o estoque, (Quantidade por item), escolher cor, tamanho, e deve ser
possivel enviar o item ao carrinho e finalizar o processo de compra utilizando cartão de credito

*/
import SELETOR from "../../support/ProcessoLogin/seletoresLogin";
import {faker} from "@faker-js/faker";

describe("Suite de testes, - Fluxo de checkout com sucesso utilizando cartão de credito.", ()=>{

    beforeEach(()=>{
        cy.visit(Cypress.config('baseUrl'));
    
    })
    
    //Funçoes auxiliares
    function cadastraNovoUsuario(){

        const nome =faker.person.firstName();
        const UltimoNome = faker.person.lastName();
        const email = faker.internet.email();
        const senha = Cypress.env('defaultPassword')
        const gravaemail = email;
        Cypress.env('usuarioEmail', email);

        cy.get(SELETOR.campoNome).type(nome);
        cy.get(SELETOR.campoUltimoNome).type(UltimoNome);
        cy.get(SELETOR.campoEmail).type(email);
        cy.get(SELETOR.campoSenha).type(senha);
        cy.get(SELETOR.campoConfirmaSenha).type(senha);
        cy.get(SELETOR.btnCadastrar).click();

    }
    function realizarLogin(){

        const senha = Cypress.env('defaultPassword')
        
        cy.get(SELETOR.loginEmail).type(Cypress.env('usuarioEmail'));
        cy.get(SELETOR.loginSenha).type(senha);
        cy.get(SELETOR.btnLogin).click();
        
    }
    it("CE01: Quando o usuario acessa a apagina do magento, e informa suas credencias validas, então deve realizar o login com sucesso. ", () =>{
        //Validação pagina cadastro 
        cy.contains('Create an Account').should('be.visible').click();
        cy.url().should('eq', 'https://magento2-demo.magebit.com/customer/account/create/');
        cy.contains('Create New Customer Account').should('be.visible');
        cy.contains('Personal Information').should('be.visible');

        //Preenchendo o cadastro
        cadastraNovoUsuario();

        //Validação url conta cadastrada 
        cy.url().should('eq', 'https://magento2-demo.magebit.com/customer/account/');


    });

    it("CE02: Realizar login com usuario cadastrado. ", () =>{
        //Validadação pagina login
        cy.contains('Sign In').should('be.visible').click();
        cy.url().should('eq', 'https://magento2-demo.magebit.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvMi1kZW1vLm1hZ2ViaXQuY29tLw%2C%2C/');
        cy.contains('Customer Login').should('be.visible');
        cy.contains('Registered Customers').should('be.visible');
        //Preencher campo login
        realizarLogin();
    });
});

