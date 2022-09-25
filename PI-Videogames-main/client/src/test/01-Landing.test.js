import { render, screen } from "@testing-library/react";
import Landing from "../components/Landing/Landing";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

test("renders the landing page", () => {
  render(
    <Router>
      <Landing />
    </Router>
  );
  expect(screen.getByRole("heading")).toHaveTextContent(/PRESSSTART/);
});

test("Renders one Link to Home", () => {
  render(
    <Router>
      <Landing />
    </Router>
  );
  expect(screen.getByRole("link")).toHaveAttribute("href", "/videogames");
});
