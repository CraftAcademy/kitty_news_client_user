describe('user can register to buy a subscription', () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/auth",
      response: "fixture:user_can_register.json",
    });
    cy.visit("/");
  });
  it("successfully", () => {
    cy.get("[data-cy='input-email']").type("registered@user.com");
    cy.get("[data-cy='input-password']").type("password");
    cy.get("[data-cy='input-password-confirmation']").type("password");
    cy.get("[data-cy='submit-btn']").click();
    cy.get("[data-cy='message']").should("contain", "Your registration was a success!");
  });
  it("unsuccessfully", () => {
    cy.get("[data-cy='input-email']").type("registered@user.com");
    cy.get("[data-cy='input-password']").type("password");
    cy.get("[data-cy='input-password-confirmation']").type("wrong_password");
    cy.get("[data-cy='submit-btn']").click();
    cy.get("[data-cy='message']").should("contain", "something went wrong!");
  })
});
