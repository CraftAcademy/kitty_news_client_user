describe("A user can,", () => {
  describe("successfully,", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/articles",
        response: "fixture:articles_data.json",
      });
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/categories/1",
        response: "fixture:categories_data.json",
      });
      cy.visit("/");
    });

    it("see a list of articles in a specific category,", () => {
      cy.get("[data-cy='category-sports']").click();
      cy.get("[data-cy='article-1']").should("contain", "Sport 1");
      cy.get("[data-cy='article-2']").should("contain", "Sport 2");
      cy.get("[data-cy='article-3']").should("contain", "Sport 3");
    });
  });
});
