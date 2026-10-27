context('Adiciona um cliente', () => {
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

  it('Cria cliente', () => {
    // redireciona para pagina de clientes
    cy.visit('http://localhost:3000/clientes');

    // clica no botão de adicionar cliente
    cy.get('button').contains('Novo cliente').click();

    // preenche o campo de cpfCnpj
    cy.get('[id="cpfCnpj"]').type('46241691821');

    // preenche o campo de nome
    cy.get('[id="nome"]').type('Rani Montagna');

    // preenche o campo de email
    cy.get('[id="email"]').type('teste@gmail.com');

    // preenche o campo de telefone
    cy.get('[id="telefone"]').type('11999999999');

    // clica no botão de submit
    cy.get('button[type="submit"]').click();
  });
});

