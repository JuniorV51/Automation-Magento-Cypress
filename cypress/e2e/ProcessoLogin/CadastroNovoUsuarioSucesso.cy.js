/*Dado que o usuário deseja acessar a plataforma, ele deve se cadastrar fornecendo suas credenciais válidas (nome, sobrenome, e-mail, senha), 
ao completar o cadastro com sucesso, o sistema deve redirecionar o usuário para a página de usuário. 
Quando o usuário informa o e-mail e a senha cadastrados, então, o sistema deve realizar o login com sucesso,
e o usuário deve ser redirecionado para a página inicial, onde terá acesso à plataforma e suas funcionalidades.

*/
import{cadastraNovoUsuario,LoginCadastroUsuario} from '../../support/FuncoesGenericas/ProcessoLogin'
import SELETOR from '../../support/ProcessoLogin/seletoresLogin';
describe("Suite de testes, - Fluxo de cadastro de cliente .", ()=>{

    let loginemail;
    beforeEach(()=>{
        cy.visit(Cypress.config('baseUrl'));
    
    });
    
    it("CE01: Quando o usuario acessa a apagina do magento, e informa suas credencias validas, então deve realizar o cadastro com sucesso. ", () =>{
        //Validação pagina cadastro 
        cy.contains('Create an Account').should('be.visible').click();
        cy.url().should('eq', 'https://magento2-demo.magebit.com/customer/account/create/');
        cy.contains('Create New Customer Account').should('be.visible');
        cy.contains('Personal Information').should('be.visible');
        //Preenchendo o cadastro
         loginemail = cadastraNovoUsuario();
        //Validação url conta cadastrada 
        cy.url().should('eq', 'https://magento2-demo.magebit.com/customer/account/');


    });

    it("CE02: Realizar login com usuario cadastrado. ", () =>{
        //Validadação pagina login
        cy.contains('Sign In').should('be.visible').click({force : true});
        cy.url().should('eq', 'https://magento2-demo.magebit.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvMi1kZW1vLm1hZ2ViaXQuY29tLw%2C%2C/');
        cy.contains('Customer Login').should('be.visible');
        cy.contains('Registered Customers').should('be.visible');
        //Preencher campo login
        LoginCadastroUsuario();

    });
});
