// import express, { Request, Response } from 'express';
// import request from 'supertest';
// import rentsRouter from '../../src/router/rentsrouter';
// import { getFilteredRents } from '../../src/controllers/rentController';
// import { getRentByPrice } from '../../src/db/rentsdb';
// import 'jest';


// const app = express();
// const router = express.Router();
// rentsRouter(router);
// app.use(router);


// // Mock RentModel.find method
// jest.mock('../../src/db/rentsdb', () => ({
//   getRentByPrice: jest.fn(),
// }));

// describe('Test getFilteredRents by rent price', () => {
//   test('returns filtered rent price', async () => {
//     const mockRequest = {
//       query: {
//         rentmin: '100',
//         rentmax: '300',
//       },
//     } as unknown as Request;

//     const mockResponse = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     } as unknown as Response;

//     // Set up the mock implementation for RentModel.find
//     const getRentByPriceMock = jest.requireMock('../../src/db/rentsdb').getRentByPrice;
//     getRentByPriceMock.mockResolvedValue([{ rentprice: 200 }, { rentprice: 300 }]);

//     await getFilteredRents(mockRequest, mockResponse);

//     expect(getRentByPriceMock).toHaveBeenCalledWith({ rentmin: 100, rentmax: 300 });

//     //expect(getRentByPriceMock).toHaveBeenCalledWith(100, 300);
//     // expect(mockResponse.status).toHaveBeenCalledWith(200);
//     expect(mockResponse.json).toHaveBeenCalledWith([
//       { rentprice: 200 },
//       { rentprice: 300 },
//     ]);
//   });
// });


