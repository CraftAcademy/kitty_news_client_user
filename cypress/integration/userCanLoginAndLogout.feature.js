/* eslint-disable no-undef */
describe('user can login', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/articles',
      response: 'fixture:articles_data.json',
    })
  })

  describe('successfully', () => {
    beforeEach(() => {
      cy.route({
        method: 'POST',
        url: 'http://localhost:3000/api/auth/sign_in',
        response: 'fixture:user_can_login.json',
      })
      cy.route({
        method: 'GET',
        url: 'http://localhost:3000/api/auth/validate_token**',
        response: 'fixture:user_can_login.json',
      })
      cy.visit('/')
    })
    it('with valid credentials', () => {
      cy.get("[data-cy='log-in-button']").click()
      cy.get("[data-cy='log-in-form']").within(() => {
        cy.get("[data-cy='log-in-email']").type('registered@user.com')
        cy.get("[data-cy='log-in-password']").type('password')
        cy.get("[data-cy='log-in-submit-btn']").click()
        cy.get("[data-cy='log-in-form']").should('not.be.visible')
      })
    })
  })

  describe('unsuccessfully', () => {
    beforeEach(() => {
      cy.route({
        method: 'POST',
        url: 'http://localhost:3000/api/auth/sign_in',
        status: '401',
        response: {
          errors: {
            full_messages: [
              'Invalid login credentials. Please try again.',
            ],
          },
          success: false,
        },
      })
      cy.visit('/')
    })
    it('with invalid credentials', () => {
      cy.get("[data-cy='log-in-button']").click()
      cy.get("[data-cy='log-in-form']").within(() => {
        cy.get("[data-cy='log-in-email']").type('wrong@user.com')
        cy.get("[data-cy='log-in-password']").type('wrong_password')
        cy.get("[data-cy='log-in-submit-btn']").click()
        cy.get("[data-cy='log-in-error-message']").should(
          'contain',
          'Invalid login credentials. Please try again.'
        )
      })
    })
  })

  describe("user can log out", () => {
    beforeEach(() => {
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/auth/sign_in",
        response: "fixture:user_can_login.json",
      })
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/auth/validate_token**",
        response: "fixture:user_can_login.json",
      })
      cy.route({
        method: "DELETE",
        url: "http://localhost:3000/api/auth/sign_out",
      })
      cy.visit("/")
      cy.get("[data-cy='log-in-button']").click()
      cy.get("[data-cy='log-in-form']").within(() => {
        cy.get("[data-cy='log-in-email']").type("registered@user.com")
        cy.get("[data-cy='log-in-password']").type("password")
        cy.get("[data-cy='log-in-submit-btn']").click()
      })
    })
    it("successfully", () => {
      cy.get("[data-cy='log-out-button']").click()
      cy.get("[data-cy='log-in-button']").should("be.visible")
    })
  })
})
