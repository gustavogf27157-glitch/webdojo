describe('Tocar o video', () => {


    it('Deve poder tocar o video de exemplo', () => {

      cy.login()
        cy.contains('Video').click()

cy.get('iframe[title="Video Player"]')
  .its('0.contentDocument.body')
  .should('not.be.empty')
  .then(cy.wrap)
  .as('iFramePlayer')

cy.get('@iFramePlayer')
  .find('.play-button')
  .click()
    })


})

