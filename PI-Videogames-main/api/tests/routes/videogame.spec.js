/*const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Videogame, conn } = require("../../src/db.js");

const agent = session(app);
const videogame = {
  name: "Super Mario Bros",
  description: "Juego de plataformas",
  released: "1985-09-13",
  rating: 5,
  platforms: "Nintendo",
  genres: "Plataformas",
};

describe("Videogame routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Videogame.sync({ force: true }).then(() => Videogame.create(videogame))
  );
  describe("GET /videogames", () => {
    it("should get 200", () => agent.get("/videogames").expect(200));
  });
});*/

const request = require("supertest")("http://localhost:3001/");
const expect = require("chai").expect;

describe("GET /videogames", () => {
  it("returns all the videogames", async () => {
    const response = await request.get("/videogames");
    expect(response.status).to.equal(200);
  });
});
