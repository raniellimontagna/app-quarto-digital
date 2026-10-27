context('Excluir um quarto', () => {
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

  it('Exclui último quarto da listagem', () => {
    // redireciona para pagina de quartos
    cy.visit('http://localhost:3000/quartos');

    // clica no menu de ação do quarto
    cy.get('div[aria-label="Ações"]').last().click();

    // clica no botão de editar quarto
    cy.get('p').contains('Excluir').click();

    // clica no botão de confirmar exclusão
    cy.get('button').contains('Excluir').click();
  });
});

