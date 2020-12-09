describe("A user can see list of articles", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("if there are articles", () => {
    before(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http//localhost:3000/api/articles",
        response: "fixture:articles_data.json",
      });
    });

    it("successfully", () => {
      cy.get("[data-cy='article-index']").within(() => {
        cy.contains('Cats are better than dogs!')
        cy.contains('Have you noticed how smelly dogs are? Well that...')
      })
    });
  });
});
