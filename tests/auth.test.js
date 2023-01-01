const request = require("supertest");
const app = require("../app");

jest.setTimeout(30000)

beforeAll(done => {
  done()
})

afterAll(done => {
  done()
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
        { email: "username" },
        { password: "123456" },
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
  it("Successful Register", async () => {
    const res = await request(app).post("/register").send({
      first_name: "Test",
      last_name: "Test",
      email: "mcaliskanmert@gmail.com",
      password: "123456",
    });
    expect(res.statusCode).toBe(409);
  });


});
