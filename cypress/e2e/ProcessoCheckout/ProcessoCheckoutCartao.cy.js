/*Dado que usuario tenha acesso a plataforma com suas credencias e ele seleciona 
um produto atraves de uma pesquisa fornecida, ao selecionar o produto e suas caracterias
deve ser possivel alterara o estoque, (Quantidade por item), escolher cor, tamanho, e deve ser
possivel enviar o item ao carrinho e finalizar o processo de compra utilizando cartão de credito

*/
import{PesquisaProduto,AdicionarItemCarrinho,FinalizarCompra} from'../../support/FuncoesGenericas/ProcessoCheckout'
import ITEM from '../../support/ProcessoLogin/seletoresItem';

describe("Suite de testes, - Fluxo de Checkout Cartão.", ()=>{

    let pegarDadosCheckout;
    beforeEach(()=>{
        cy.visit(Cypress.config('baseUrl'));
    
    })

        it("CE01: Quando o usuario acessa a apagina do magento, pesquisar por item e adicionar ele no carrinho para realizar o checkout. ", () =>{
             //Pesquisar item
            cy.get(ITEM.pesquisa).type("Hot Sellers{enter}" );
            //Adicionar item no carrinho
            AdicionarItemCarrinho();  
            //Validação de pagina 
            cy.url().should('eq', 'https://magento2-demo.magebit.com/checkout/#shipping');
            cy.contains('Shipping Address').should('be.visible');
            //Finalizar compra checkout
            pegarDadosCheckout = FinalizarCompra();

            //cy.contains('Payment Method').should('be.visible');
            //cy.contains(Teste).should(pegarDadosCheckout.PriemiroNome);

        });

});
