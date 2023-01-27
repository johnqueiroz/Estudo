// cypress/integration/typeformAPI.spec.js

const { expect } = require("chai")

const API_URL = "https://api.typeform.com/"
const authorization = `Bearer ${Cypress.env('TYPEFORM_ACCESS_TOKEN')}`

describe('Typeform API tests', () =>{

  context('Cleanup before start', ()=>{
    beforeEach(() =>{
      cy.request({
        method:'GET',
        url:`${API_URL}forms`,
        headers: { authorization }
      })
      .should(({ status, body }) => {
        expect(status).to.eq(200)
        body.items.forEach(item =>{

        if(item.title === sampleForm.title){
          cy.request({
            method:'DELETE',
            url: `${API_URL}forms/${item.id}`,
            headers: { authorization }
            })
            .should(({ status }) =>{
              expect(status).to.eq(204)
            })
          }

        })
      })
    })
  })

it('retrieves my user information', () => {
  cy.request({ 
    method: 'GET',
    url: `${API_URL}me`,
    headers: { authorization }
  }).should(({ status, body }) => {
    const { alias, email, language } = body

    expect(status).to.eq(200)
    expect(alias).to.eq('John Emerson')
    expect(email).to.eq(Cypress.env('username'))
    expect(language).to.eq('en')
  })
})

it('retrieves from responses', () =>{
  cy.request({
    method:'GET',
    url:`${API_URL}forms/${Cypress.env('formId')}/responses`,
    headers: { authorization }
  })
  .should(({ status, body }) =>{
    expect(status).to.eq(200),
    expect(body.total_items).to.eq(body.total_items.length)
  })
})


it('Create a form example', () =>{
  cy.request({
    method:'POST',
    url:`${API_URL}forms`,
    headers: { authorization },
    body: sampleForm 
  })
})

})