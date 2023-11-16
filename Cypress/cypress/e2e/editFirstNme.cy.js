/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

const Password = "TestRauca";
//const loginName = faker.string.alpha({ length: { min: 5, max: 64 } });

describe("login new user", () => {
  it("Edit FirstName", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("#customer_menu_top").contains("Login or register").click();
    cy.get("#loginFrm_loginname").type("Raluca");
    cy.get("#loginFrm_password").type(Password, { delay: 0 });
    cy.get('button[title="Login"]').click();
    cy.get(".side_account_list >li:nth-child(3)").click();
    cy.get("#AccountFrm_firstname").clear();
    cy.get("#AccountFrm_firstname").type("Test").click();
    cy.get('button[title="Continue"]').click();
    cy.contains("Success: Your account has been successfully updated.").should("be.visible");
  });
});
