describe('user can register to buy a subscription', () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fixture:articles_data.json",
    });
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/auth",
      response: "fixture:user_can_register.json",
    });
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/auth/validate_token**",
      response: "fixture:user_can_register.json",
    });
    cy.visit("/");
  });
  it("successfully", () => {
    cy.get("[data-cy='signup-button']").click()
    cy.get("[data-cy='input-email']").type("registered@user.com");
    cy.get("[data-cy='input-password']").type("password");
    cy.get("[data-cy='input-password-confirmation']").type("password");
    cy.get("[data-cy='submit-btn']").click();
    cy.get("[data-cy='signup']").should("not.exist");
  });
  it("unsuccessfully", () => {
    cy.get("[data-cy='signup-button']").click()
    cy.get("[data-cy='input-email']").type("registered@user.com");
    cy.get("[data-cy='input-password']").type("password");
    cy.get("[data-cy='input-password-confirmation']").type("wrong_password");
    cy.get("[data-cy='submit-btn']").click();
    cy.get("[data-cy='register-error-message']").should("contain", "Something went wrong!");
  })
});
