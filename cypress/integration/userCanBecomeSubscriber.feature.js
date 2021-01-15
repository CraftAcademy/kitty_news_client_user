/* eslint-disable no-undef */
describe("User can become a subscriber", () => {
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
    cy.get("[data-cy='signup-button']").click();
    cy.get("[data-cy='signup-form']").within(() => {
      cy.get("[data-cy='input-email']").type("registered@user.com");
      cy.get("[data-cy='input-password']").type("password");
      cy.get("[data-cy='input-password-confirmation']").type("password");
      cy.get("[data-cy='submit-btn']").click();
    });
    cy.get("[data-cy='become-subscriber']").should("be.visible");
  });

  describe("successfully", () => {
    beforeEach(() => {
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/subscriptions",
        response: "fixture:payment_response.json",
      });
    });
    it("filling in valid credit card information", () => {
      cy.get("[data-cy='become-subscriber']").click();
      cy.get('[data-cy="payment-form"]').within(() => {
        cy.get('[data-cy="card-number"]').within(() => {
          cy.wait(1000);
          cy.get('iframe[name^="__privateStripeFrame"]').then(($iframe) => {
            const $body = $iframe.contents().find("body");
            cy.wrap($body)
              .find('input[name="cardnumber"]')
              .type("4242424242424242", { delay: 10 });
          });
        });
        cy.get('[data-cy="card-expiry"]').within(() => {
          cy.get('iframe[name^="__privateStripeFrame"]').then(($iframe) => {
            const $body = $iframe.contents().find("body");
            cy.wrap($body)
              .find('input[name="exp-date"]')
              .type("1222", { delay: 10 });
          });
        });
        cy.get('[data-cy="card-cvc"]').within(() => {
          cy.get('iframe[name^="__privateStripeFrame"]').then(($iframe) => {
            const $body = $iframe.contents().find("body");
            cy.wrap($body).find('input[name="cvc"]').type("424", { delay: 10 });
          });
        });
        cy.get("button").contains("Confirm Payment").click();
      });
      cy.get('[data-cy="payment-success-message"]').contains(
        "Meow. Thanks for the yarn!"
      );
    });
  });

  describe("unsuccessfully", () => {
    beforeEach(() => {
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/subscriptions",
        response: "fixture:payment_error_response.json",
        status: 422,
      });
    });
    it("filling in invalid credit card information", () => {
      cy.get("[data-cy='become-subscriber']").click();
      cy.get('[data-cy="payment-form"]').within(() => {
        cy.get('[data-cy="card-number"]').within(() => {
          cy.wait(1000);
          cy.get('iframe[name^="__privateStripeFrame"]').then(($iframe) => {
            const $body = $iframe.contents().find("body");
            cy.wrap($body)
              .find('input[name="cardnumber"]')
              .type("4242424242424241", { delay: 10 });
          });
        });
        cy.get('[data-cy="card-expiry"]').within(() => {
          cy.get('iframe[name^="__privateStripeFrame"]').then(($iframe) => {
            const $body = $iframe.contents().find("body");
            cy.wrap($body)
              .find('input[name="exp-date"]')
              .type("1222", { delay: 10 });
          });
        });
        cy.get('[data-cy="card-cvc"]').within(() => {
          cy.get('iframe[name^="__privateStripeFrame"]').then(($iframe) => {
            const $body = $iframe.contents().find("body");
            cy.wrap($body).find('input[name="cvc"]').type("424", { delay: 10 });
          });
        });
        cy.get("button").contains("Confirm Payment").click();
      });
      cy.get('[data-cy="payment-error-message"]').contains(
        "Hiss Hiss! Your payment information is a miss!"
      );
    });
  });
});
