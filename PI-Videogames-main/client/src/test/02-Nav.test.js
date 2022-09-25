import React from "react";
import { render, screen } from "@testing-library/react";
import Nav from "../components/Nav/Nav";
import { BrowserRouter as Router } from "react-router-dom";

test("should render two <Link /> ", () => {
  render(
    <Router>
      <Nav />
    </Router>
  );
  expect(screen.getAllByRole("link")).toHaveLength(2);
});

test("The first link should be Henry Games and change the route to /videogames", () => {
  render(
    <Router>
      <Nav />
    </Router>
  );
  expect(screen.getAllByRole("link")[0]).toHaveAttribute("href", "/videogames");
  expect(screen.getAllByRole("link")[0]).toHaveTextContent(/HenryGames/);
});

test("The second link should be Create a Game and change the route to /videogame", () => {
  render(
    <Router>
      <Nav />
    </Router>
  );
  expect(screen.getAllByRole("link")[1]).toHaveAttribute("href", "/videogame");
  expect(screen.getAllByRole("link")[1]).toHaveTextContent(/Create Videogame/);
});
