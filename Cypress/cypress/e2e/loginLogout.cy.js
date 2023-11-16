/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

const password = "TestRauca";

describe("login and logout", () => {
  it("Login", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("#customer_menu_top").contains("Login or register").click();
    cy.get("#loginFrm_loginname").type("Raluca");
    cy.get("#loginFrm_password").type(password, { delay: 0 });
    cy.get('button[title="Login"]').click();
    cy.get(".side_account_list >li:nth-child(10)").click();
    cy.contains(
      "You have been logged off your account. It is now safe to leave the computer."
    ).should("be.visible");
  });
});
