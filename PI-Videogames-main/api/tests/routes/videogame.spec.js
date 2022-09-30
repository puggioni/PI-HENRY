const supertest = require("supertest");
var request = require("supertest");
const app = require("../../src/app.js");

describe("GET /videogames", function () {
  it("it should has status code 200", function (done) {
    supertest(app)
      .get("/videogames")
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});

describe("GET /videogame/:id", function () {
  it("it should has status code 200", function (done) {
    supertest(app)
      .get("/videogame/4200")
      .expect(200)
      .end(function (err, res) {
        if (err) done(err);
        done();
      });
  });
});
describe("GET /videogames?name=", function () {
  it("it should has status code 200", function (done) {
    supertest(app)
      .get("/videogames?name=wit")
      .expect(200)
      .end(function (err, res) {
        if (err) done(err);
        done();
      });
  });
});
describe("POST /videogames", function () {
  it("should respond with status 200", function (done) {
    request(app)
      .post("/videogames")
      .send({ name: "Agustin" })
      .expect(200)
      .expect("Content-Type", /json/)
      .end(function (err, res) {
        if (err) done(err);
      });
    done();
  });
});
describe("GET /genres", function () {
  it("it should has status code 200", function (done) {
    supertest(app)
      .get("/genres")
      .expect(200)
      .end(function (err, res) {
        if (err) done(err);
        done();
      });
  });
});
