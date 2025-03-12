import request from "supertest";
import app from "../../app";

describe("Index Controller", () => {
  it("should return a success message", async () => {
    const res = await request(app).get("/api");

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("success", true);
    expect(res.body.data).toHaveProperty("message", "Hello from Express!");
  });
});
