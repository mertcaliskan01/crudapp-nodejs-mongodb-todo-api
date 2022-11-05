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




describe("Auth Tests", () => {

  describe("/login", () => {
    it("Successful Login", async () => {
      const res = await request(app).post("/login").send({
        email: "mcaliskanmert@gmail.com",
        password: "123456",
      });
      expect(res.statusCode).eq(200);
    });
    
    it("Failed Login - password missing", async () => {
      const res = await request(app).post("/login").send({
        email: "mcaliskanmert@gmail.com",
      });
      expect(res.statusCode).eq(400);
    });
    
    it("Failed Login - email missing", async () => {
      const res = await request(app).post("/login").send({
        password: "123456",
      });
      expect(res.statusCode).eq(400);
    });


  });

  describe("/register", () => {
    it("Successful Register", async () => {
      const res = await request(app).post("/register").send({
        first_name: "Test",
        last_name: "Test",
        email: "mcaliskanmert@gmail.com",
        password: "123456",
      });
      expect(res.statusCode).eq(409);
    });
    
    it("Failed Register - user already exist", async () => {
      const res = await request(app).post("/register").send({
        first_name: "Test",
        last_name: "Test",
        email:   between(1, 9000) + "mcaliskanmert@gmail.com",
        password: "123456",
      });
      expect(res.statusCode).eq(201);
    });
    

  });


});