describe("A user can", () => {
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

		it("navigate from an article back to news page", () => {
			cy.get("[data-cy='header-news']").should("contain", "News");
      cy.get("[data-cy='header-news']").click();
      cy.get("[data-cy='article-index']").should("exist")
		});
	});
});
