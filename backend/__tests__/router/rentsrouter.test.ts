import express, { Request, Response } from "express";
import request from "supertest";
import rentsRouter from "../../src/router/rentsrouter";
import { getFilteredRents } from "../../src/controllers/rentController";


const app = express();
const router = express.Router();
rentsRouter(router);
app.use(router);

// describe("Test userrouter.ts", () => {
//     test("prints rents objects", async () => {
//       const res = await request(router).get("/users");
//       expect(res.body).toEqual({ message: "Check the users data endpoint" });
//     });
//   });

//   describe("Test app.ts", () => {
//     test("Catch-all route", async () => {
//       const res = await request(router).get("/");
//       expect(res.body).toEqual({ message: "Hello! Catch-all route. in test" });
//     });
//   });

describe("Test getFilteredRents", () => {
  test("returns filtered rents", async () => {
    const mockRequest = {
      query: {
        location: "Auckland",
        suburb: "Remuera",
        propertytype: "House",
        // rentmin: 100,
        // rentmax: 1000,
        // bedrooms: 1,
      },
    } as unknown as Request;

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;


    
    await getFilteredRents(mockRequest, mockResponse);


    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          location: "Auckland",
          suburb: "Remuera",
          propertytype: "House",
          // rentmin: 100,
          // rentmax: 1000,
          // bedrooms: 1,
        }),
      ])
    );
  }, 20000);
});