// https://docs.cypress.io/api/introduction/api.html

describe('Test de opiniones', () => {
  it('Agregar una opinión', () => {
    const opinion = 'Excelente juego';
    cy.visit('/');
    const btnModal = cy.get(':nth-child(1) > .card button');
    btnModal.click({ force: true });
    cy.get('#nombre').type('Patricio');
    cy.get('#opiniones').type(opinion);
    const btnSubmit = cy.get('#my-modal .submit');
    btnSubmit.click({ force: true });
    cy.visit('/opiniones');
    const accordionButton = cy.get(':nth-child(1) > .accordion button');
    accordionButton.click({ force: true });
    cy.get(':nth-child(1) > .card-text').should('have.text',`Opinión: ${opinion}`);
  });

  it('Eliminar una opinión', () => {
    cy.visit('/administracion');
    const deleteButton = cy.get('tbody tr:nth-child(1) .btn-danger');
    deleteButton.click({ force: true });
    cy.get('table').should('not.exist');
  });
})