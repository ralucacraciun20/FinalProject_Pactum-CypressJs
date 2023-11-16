/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

const Password = "TestRauca";
//const loginName = faker.string.alpha({ length: { min: 5, max: 64 } });


describe("Register new user", () => {
  it("Create account", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("#customer_menu_top").contains("Login or register").click();
    cy.get('button[title="Continue"]').click();
    cy.get("#AccountFrm_firstname").type(faker.person.firstName(), {delay :0,});
    cy.get("#AccountFrm_lastname").type(faker.person.lastName(), {delay :0,});
    cy.get("#AccountFrm_email").type(faker.internet.email(), {delay :0,});
    cy.get("#AccountFrm_telephone").type("08763849503");
    cy.get("#AccountFrm_company").type(faker.company.name(), {delay :0,});
    cy.get("#AccountFrm_address_1").type(faker.location.streetAddress(), {delay :0,});
    cy.get("#AccountFrm_city").type("Bristol", {delay :0,});
    cy.get("#AccountFrm_zone_id").select("Bristol");
    cy.get("#AccountFrm_postcode").type("3522");
   
    cy.get("#AccountFrm_loginname").type("Raluca");
    cy.get("#AccountFrm_password").type(Password, {delay :0,});
    cy.get("#AccountFrm_confirm").type(Password, {delay :0,});
    cy.get("#AccountFrm_newsletter1").type("yes").click();
    cy.get("#AccountFrm_agree").click();
    cy.get('button[title="Continue"]').click();
    cy.contains("Your Account Has Been Created!").should("be.visible");


  });
  });