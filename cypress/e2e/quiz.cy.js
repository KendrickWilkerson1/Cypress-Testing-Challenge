import React from "react";

describe("test quiz", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001/');
      });
    

  it("Should show Start Quiz button", () => {
    cy.get("button").should("be.visible");
    cy.get("button").should("have.text", "Start Quiz");
  });

  it("Should start quiz when clicked", () => {
    cy.get("button").click();
    cy.get(".card").should("be.visible")
  });

  it("Should show a quiz question", () => {
    cy.get("button").click();
    cy.get("h2").should("be.visible");
    cy.get("button").should("have.length", 4);
  });

  it("Should show a total of ten quiz questions", () => {
    cy.get("button").click();
    Cypress._.times(10, () => {        
        cy.get(".card").should("be.visible");
        cy.get("button").first().click();
    })
        cy.get(".card").should("be.visible");
        cy.get("h2").contains("Quiz Completed");
        cy.get("button").should("have.text", "Take New Quiz");
});
    it("Should start a new test", () => {
        cy.get("button").click();
        Cypress._.times(10, () => {        
            cy.get("button").first().click();
        })
        cy.get("button").click();
        cy.get("button").should("have.length", 4);
        })

});
