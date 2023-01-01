const request = require("supertest");
const app = require("../app");

jest.setTimeout(60000)


beforeAll(done => {
  done()
})


afterAll(done => {
  done()
})

beforeEach(() => {

})


describe("/login", () => {
  

  describe("given a username and password", () => {
    it("should respond with a 200 status code", async () => {
      const res = await request(app).post("/login").send({
        email: "mcaliskanmert@gmail.com",
        password: "123456",
      });
      expect(res.statusCode).toBe(200);
    });

  })

  describe("when the username and password is missing", () => {
    it("should respond with a 400 status code", async () => {

      const bodyData = [
        { email: "mcaliskanmert@gmail.com" },
        { email: "example@gmail.com" },
        { email: "email" },
        { email: "" },
        { password: "123456" },
        { password: "mmmmmm" },
        { password: "" },
        {}
      ]
      for (const body of bodyData) {
        const res = await request(app).post("/login").send(body)
        expect(res.statusCode).toBe(400)
      }
    });

  })
});

describe("/register", () => {
  describe("given a info", () => {
    it("should respond with a 409 status code", async () => {
      const res = await request(app).post("/register").send({
        first_name: "Test",
        last_name: "Test",
        email: "mcaliskanmert@gmail.com",
        password: "123456",
      });
      expect(res.statusCode).toBe(409);
    });

  });

  describe("when one of the fields is missing", () => {
    it("should respond with a 400 status code", async () => {

      const bodyData = [
        {
          last_name: "Test",
          email: "mcaliskanmert@gmail.com",
          password: "123456",
        },
        {
          first_name: "Test",
          email: "mcaliskanmert@gmail.com",
          password: "123456",
        },
        {
          first_name: "Test",
          last_name: "Test",
          password: "123456",
        },
        {
          first_name: "Test",
          last_name: "Test",
          email: "mcaliskanmert@gmail.com",
        },
        {
          first_name: "",
          last_name: "",
          email: "",
          password: "",
        },
        {}
      ]
      for (const body of bodyData) {
        const res = await request(app).post("/register").send(body);
        expect(res.statusCode).toBe(400)
      }
    });

  })
});
