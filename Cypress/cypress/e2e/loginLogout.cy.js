/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

const Password = "TestRauca";
//const loginName = faker.string.alpha({ length: { min: 5, max: 64 } });

describe("login and logout", () => {
  it("Edit FirstName", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("#customer_menu_top").contains("Login or register").click();
    cy.get("#loginFrm_loginname").type("Raluca");
    cy.get("#loginFrm_password").type(Password, { delay: 0 });
    cy.get('button[title="Login"]').click();
    cy.get(".side_account_list >li:nth-child(10)").click();
    cy.contains("You have been logged off your account. It is now safe to leave the computer.").should("be.visible");
    cy.get(".btn.btn-default.mr10").contains("Continue").click();
   
    

});
});