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

describe("/create", () => {
  it("should respond with a 200 status code", async () => {
    const res = await request(app).post("/api/tasks/").send({
      title: "Title",
      description: "Description",
      completed: false
    });
    expect(res.statusCode).toBe(200);
  });

});

describe("/getAll", () => {
  it("should respond with a 200 status code", async () => {
    const res = await request(app).get("/api/tasks/");
    expect(res.statusCode).toBe(200);
  });
});

describe("/getAllCompleted", () => {
  it("should respond with a 200 status code", async () => {
    const res = await request(app).get("/api/tasks/completed");
    expect(res.statusCode).toBe(200);
  });
});

describe("/get", () => {
  it("should respond with a 200 status code", async () => {
    const res = await request(app).get("/api/tasks/639837203f17ebfc6d6f6335");
    expect(res.statusCode).toBe(200);
  });
});



describe("/update", () => {
  it("should respond with a 200 status code", async () => {
    const res = await request(app).put("/api/tasks/639837203f17ebfc6d6f6335");
    expect(res.statusCode).toBe(200);
  });
});

