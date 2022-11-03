const { expect } = require("chai");
const request = require("supertest");
const app = require("../app");

  
beforeEach(async () => {
});

afterEach(async () => {
});

describe("Auth Tests", () => {
  describe("/get/test", () => {
    it("Get Test Should return successful response", async () => {
      const res = await request(app).get("/get/test");
      expect(res.statusCode).eq(200);
    });
  
    it("Get Test Should return successful message", async () => {
      const res = await request(app).get("/get/test");
      expect(res.statusCode).eq(200);
      expect(res.body.succeed).eq(true);
      expect(res.body.message).eq('Get Test');
    });
  });

  describe("/post/test", () => {
    it("Post Test Should return successful response", async () => {
      const res = await request(app).post("/post/test").send({
        email: "test@gmail.com",
        password: "123456",
      });
      expect(res.statusCode).eq(200);
    });
  
    it("Post Test Should return successful message", async () => {
      const res = await request(app).post("/post/test").send({
        email: "test@gmail.com",
        password: "123456",
      });
      expect(res.statusCode).eq(200);
      expect(res.body.succeed).eq(true);
      expect(res.body.message).eq("Post Test");
    });
  });
});