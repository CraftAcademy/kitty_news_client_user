describe("A user can see list of articles", () => {
  describe("if there are articles", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/articles",
        response: "fixture:articles_data.json",
      });
      cy.visit("/");
    });

    it("successfully", () => {
      cy.get("[data-cy='article-index']").within(() => {
        // cy.get("")
        cy.contains('Cats are better than dogs!')
        cy.contains('Have you noticed how smelly dogs are? Well that...')
        cy.contains('Emma should get a cat instead!')
        cy.contains('Why? No borks. No smelly smells.')
        cy.contains('Thomas most likely needs a cat in his life')
        cy.contains('They bring calm vibes. May be needed')
        cy.contains('Why is Emma leaving us? ')
        cy.contains('Please stay. We have cats')
      })
    });
  });
});
