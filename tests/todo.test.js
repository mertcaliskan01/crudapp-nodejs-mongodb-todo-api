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
      const res = await request(app).post("/api/").send({
        title: "Title",
        description: "Description",
        completed: false
      });
      console.log(res.body);
      expect(res.statusCode).eq(200);
    });

  });

  describe("/api/ getAll", () => {
    it("Successful Response", async () => {
      const res = await request(app).get("/api/");
      expect(res.statusCode).eq(200);
    });
  });

  describe("/api/ getAllCompleted", () => {
    it("Successful Response", async () => {
      const res = await request(app).get("/api/completed");
      expect(res.statusCode).eq(200);
    });
  });

  describe("/api/ get", () => {
    it("Successful Response", async () => {
      const res = await request(app).get("/api/0");
      expect(res.statusCode).eq(200);
    });
  });



  describe("/api/ update", () => {
    it("Successful Response", async () => {
      const res = await request(app).put("/api/0");
      expect(res.statusCode).eq(200);
    });
  });



  describe("/api/ delete", () => {
    it("Successful Response", async () => {
      const res = await request(app).delete("/api/0");
      expect(res.statusCode).eq(200);
    });
  });


  describe("/api/ deleteAll", () => {
    it("Successful Response", async () => {
      const res = await request(app).delete("/api/");
      expect(res.statusCode).eq(200);
    });
  });

});