/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

const Password = "TestRauca";

describe("Place order", () => {
  it("Place order", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("#customer_menu_top").contains("Login or register").click();
    cy.get("#loginFrm_loginname").type("Raluca");
    cy.get("#loginFrm_password").type(Password, { delay: 0 });
    cy.get('button[title="Login"]').click();
    cy.get('div img[src="resources/image/18/7a/8.png"]')
      .first()
      .parent("a")
      .click();
    cy.get(
      "#block_frame_featured_1769 > div > div:nth-child(1) > div.thumbnail > div.pricetag.jumbotron > a > i"
    ).click();
    cy.get("#main_menu_top > li:nth-child(4) > a > span").click({
      force: true,
    });
    cy.get("#checkout_btn").click();
    cy.contains(" Your Order Has Been Processed!").should("be.visible");
  });
});
