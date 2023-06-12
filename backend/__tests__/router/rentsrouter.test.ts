import request from "supertest";
import router from "../../src/router/userrouter";

describe("Test userrouter.ts", () => {
    test("Catch-all route", async () => {
      const res = await request(router).get("/users");
      expect(res.body).toEqual({ message: "Allo! Catch-all route." });
    });
  });