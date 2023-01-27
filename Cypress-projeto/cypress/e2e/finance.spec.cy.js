/// <reference types="cypress" /> 

import { format } from '../support/utils'

// cy.viewport
// arquivos json
// config por linha de comando
// npx cypress open(ou run) --config viewportWidth=393, viewportHeight=851 para testar com responsividade, os valores são encontrados no modo desenvolvedor da página

context('Dev finances estudo', () => {

const descricao_entrada = 'Mesada'
const descricao_saida = 'Sorvete'
const valor_entrada = 50.00
const valor_saida = -25.00

beforeEach(() =>{
  cy.visit('https://dev-finance.netlify.app');
  cy.get('#data-table tbody tr').should('have.length', 0)
})


it('Cadastrar entradas', () => {

    // Entender o fluxo manualmente
    // mapear os elementos que receberão alguma interação
    // descrever as interações com cypress
    // adicionar as asserções
    // quando quiser mapear por atributo tipo pelo name, busca assim: [name=amount]
   
    cy.get('#transaction .button').click() //id + classe
    cy.get("#description").type(descricao_entrada) //id
    cy.get("[name=amount]").type(valor_entrada) //[attr=valor]
    cy.get("#date").type('2023-01-23') //id
    cy.get('button').contains('Salvar').click();


    cy.get('#data-table tbody tr').should('have.length', 1) //data table que está inserido no tbody e tr
    // should e expec é o comando usado para asserções

    //type abre a possibilidade de digitar algo no campo, string ou int

});

it('Cadastrar saídas', () => {


  cy.get('#transaction .button').click();
  cy.get('#description').type(descricao_saida);
  cy.get('[name=amount]').type(valor_saida);
  cy.get('#date').type('2023-01-24');
  cy.get('button').contains('Salvar').click();

  cy.get('#data-table tbody tr').should('have.length', 1)

});

it.only('Validar saldo com diversas transações', () => {

  cy.get('#transaction .button').click() //id + classe
  cy.get("#description").type(descricao_entrada) //id
  cy.get("[name=amount]").type(valor_entrada) //[attr=valor]
  cy.get("#date").type('2023-01-23') //id
  cy.get('button').contains('Salvar').click(); //contains verifica se tem algo igual, escrito, no elemento

  cy.get('#transaction .button').click();
  cy.get('#description').type(descricao_saida);
  cy.get('[name=amount]').type(valor_saida);
  cy.get('#date').type('2023-01-24');
  cy.get('button').contains('Salvar').click();

  
  cy.get('#totalDisplay').invoke('text').then(text=>{
  
    let totalFormatted = format(text)
    let total_geral = valor_entrada + valor_saida

    expect(totalFormatted).to.eq(total_geral)
  });


/*
  cy.get('#data-table tbody tr')
  .each(($el, index, $list) =>{

    cy.get($el).find('td.income, td.expense').invoke('text').then( text =>{
      if(text.includes('-')){
        expenses = expenses + format(text)
      }else{
        incomes = incomes + format(text)
      }
    });

  });

  cy.get('#totalDisplay').invoke('text').then(text=>{

    let total = incomes + expenses
    let formattedTotalDisplay = format(text)

    expect(formattedTotalDisplay).to.eq(total)
  });*/
});

it('Remover entradas e saídas', () => {
  
  cy.get('#transaction .button').click() //id + classe
  cy.get("#description").type(descricao_entrada) //id
  cy.get("[name=amount]").type(valor_entrada) //[attr=valor]
  cy.get("#date").type('2023-01-23') //id
  cy.get('button').contains('Salvar').click(); //contains verifica se tem algo igual, escrito, no elemento

  cy.get('#transaction .button').click();
  cy.get('#description').type(descricao_saida);
  cy.get('[name=amount]').type(valor_saida);
  cy.get('#date').type('2023-01-24');
  cy.get('button').contains('Salvar').click();

  cy.get('#data-table tbody tr').should('have.length', 2)

  //cy.contains(descricao_entrada)
  //  .parent()
  //  .find('img[onclick*=remove]')
  //  .click()
  
  // Volta no elemento pai e avança para o elemento td, img, attr
  cy.get('td.description')
    .contains(descricao_saida)
    .parent()
    .find('img[onclick*=remove]')
    .click()

  // busca todos os irmãos e busca o que tem ima + attr  
  cy.get('td.description')
    .contains(descricao_entrada)
    .siblings()
    .children('img[onclick*=remove]')
    .click()

  cy.get('#data-table tbody tr').should('have.length', 0)

});

});