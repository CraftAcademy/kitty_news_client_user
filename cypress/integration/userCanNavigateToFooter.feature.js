describe("A user can", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fixture:articles_data.json",
    });
    cy.visit("/");
  });
  it("see a footer", () => {
    cy.get("[data-cy='footer']").should("exist");
  });
});
