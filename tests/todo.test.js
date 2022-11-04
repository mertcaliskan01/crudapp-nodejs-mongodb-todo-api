const { expect } = require("chai");
const request = require("supertest");
const app = require("../app");

  
function between(min, max) {  
  return Math.floor(
    Math.random() * (max - min) + min
  )
}

beforeEach(async () => {
});

afterEach(async () => {
});




describe("Todo Tests", () => {

  
  describe("/api/ create", () => {
    it("Successful Response", async () => {
      const res = await request(app).post("/api/tasks/").send({
        title: "Title",
        description: "Description",
        completed: false
      });
      expect(res.statusCode).eq(200);
    });

  });

  describe("/api/ getAll", () => {
    it("Successful Response", async () => {
      const res = await request(app).get("/api/tasks/");
      expect(res.statusCode).eq(200);
      expect(res.text.length).greaterThan(0);
    });
  });

  describe("/api/ getAllCompleted", () => {
    it("Successful Response", async () => {
      const res = await request(app).get("/api/tasks/completed");
      expect(res.statusCode).eq(200);
    });
  });

  describe("/api/ get", () => {
    it("Successful Response", async () => {
      const res = await request(app).get("/api/tasks/0");
      expect(res.statusCode).eq(200);
    });
  });



  describe("/api/ update", () => {
    it("Successful Response", async () => {
      const res = await request(app).put("/api/tasks/0");
      expect(res.statusCode).eq(200);
    });
  });



  describe("/api/ delete", () => {

  });


  describe("/api/ deleteAll", () => {

  });

});