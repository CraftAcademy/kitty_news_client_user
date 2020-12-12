describe("User can", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fixture:articles_data.json",
    });
  });

  context("successfully", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/articles/1",
        response: "fixture:single_article.json",
      });
      cy.visit("/");
      cy.get("[data-cy='article-1']").click();
    });
    it("read a specific article", () => {
      cy.get("[data-cy='article-display']").within(() => {
        cy.get("[data-cy='title']").should(
          "contain",
          "Cats are better than dogs!"
				);
				cy.get("[data-cy='lead']").should(
          "contain",
          "Have you noticed how smelly dogs are? Well that..."
				);
				cy.get("[data-cy='body']").should(
          "contain",
          "is because they don't clean them self as good as cat does. Cats are always nice smelling and very well behaved. This is no lie, it is a simple truth-fact for sure!!"
				);
      });
    });
  });
});
