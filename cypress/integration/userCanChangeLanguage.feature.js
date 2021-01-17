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
    cy.get("[data-cy='footer']").should("contain", "No dogs allowed!")
  });

  it("swedish by clicking swedish flag icon", () => {
    cy.get("[data-cy='swedish-icon']").click();
    cy.get("[data-cy='category-global-politics']").should(
      "contain",
      "Omvärld"
    );
    cy.get("[data-cy='footer']").should("contain", "Inga hundar tillåtna!")
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
