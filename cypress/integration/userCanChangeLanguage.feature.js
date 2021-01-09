describe("User can change language to", () => {
  beforeEach(() => {
    cy.server();
    cy.visit("/");
  });

  it("english by clicking english flag icon", () => {
    cy.get("[data-cy='english-icon']").click();
    cy.get("[data-cy='category-global-politics']").should(
      "contain",
      "Global Politics"
    );
    cy.get("[data-cy='footer']").should("contain", "Made with React")
  });

  it("swedish by clicking swedish flag icon", () => {
    cy.get("[data-cy='swedish-icon']").click();
    cy.get("[data-cy='category-global-politics']").should(
      "contain",
      "Omvärlden"
    );
    cy.get("[data-cy='footer']").should("contain", "Skapad med React")
  });

  it("cat-language by clicking cat-paw icon", () => {
    cy.get("[data-cy='cat-icon']").click();
    cy.get("[data-cy='category-global-politics']").should(
      "contain",
      "Meow Meow"
    );
    cy.get("[data-cy='footer']").should("contain", "Meow Meow Meow")
  });
});
