context('Editar um serviço', () => {
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

  it('Edita serviço', () => {
    // redireciona para pagina de serviços
    cy.visit('http://localhost:3000/servicos');

    // clica no menu de ação do serviço
    cy.get('div[aria-label="Ações"]').last().click();

    // clica no botão de editar serviço
    cy.get('p').contains('Editar').click();

    // preenche o campo de nome com nome "nome"
    cy.get('[id="nome"]').type(' - Editado');

    // clica no botão de submit
    cy.get('button[type="submit"]').click();
  });
});

