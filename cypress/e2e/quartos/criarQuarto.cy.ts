context('Adiciona um quarto', () => {
  beforeEach(() => {
    // Navega para a página de login
    cy.visit('http://localhost:3000/login');

    // preenche o campo de email com nome "email"
    cy.get('[name="email"]').type('demo@quartodigital.dev');

    // preenche o campo de senha com nome "password"
    cy.get('[name="password"]').type('demo1234');

    // clica no botão de submit
    cy.get('button[type="submit"]').click();

    // espera a página de dashboard ser carregada
    cy.url().should('include', '/dashboard');
  });

  it('Cria quarto', () => {
    // redireciona para pagina de quartos
    cy.visit('http://localhost:3000/quartos');

    // clica no botão de adicionar quarto
    cy.get('button').contains('Novo quarto').click();

    // preenche o campo de nome com nome "nome"
    cy.get('[id="identificacao"]').type('999');

    // preenche o campo de descrição com nome "preço"
    cy.get('[id="diaria"]').type('10.00');

    // clica no botão de submit
    cy.get('button[type="submit"]').click();
  });
});

