import React from "react";
import { render } from "@testing-library/react";
import Quiz from "../../client/src/components/Quiz";

describe("<Quiz />", () => {
  it("mounts", () => {
    cy.mount(<Quiz />);
  });
  it("Should say start quiz", () => {
    render(<Quiz />);
    cy.get("button").should("have.text", "Start Quiz");
  });
  it("Should start quiz", () => {
    render(<Quiz />);
    cy.get("button").click();
    cy.get(".card").should("be.visible");
  });
});
