import express, { Request, Response } from 'express';
import request from 'supertest';
import rentsRouter from '../../src/router/rentsrouter';
import { getFilteredRents } from '../../src/controllers/rentController';
import { getRentByPrice } from '../../src/db/rentsdb';

const app = express();
const router = express.Router();
rentsRouter(router);
app.use(router);

// describe('Test getFilteredRents by location , suburb and property type', () => {
//   test('returns filtered rents filtered by location , suburb and property type', async () => {
//     const mockRequest = {
//       query: {
//         location: 'Auckland',
//         suburb: 'Takapuna',
//         propertytype: 'House',
//       },
//     } as unknown as Request;

//     const mockResponse = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     } as unknown as Response;

//     await getFilteredRents(mockRequest, mockResponse);
//     expect(mockResponse.json).toHaveBeenCalled();
    // expect(mockResponse.json).toHaveBeenCalledWith({
    //   location: 'Auckland',
    //   suburb: 'Takapuna',
    //   propertytype: 'House',
    // });
    
//   }, 20000);
// });

// describe('Test getFilteredRents by bedrooms number', () => {
//   test('returns filtered by bedrooms', async () => {
//     const mockRequest = {
//       query: {
//         bedrooms: 1,
//       },
//     } as unknown as Request;

//     const mockResponse = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     } as unknown as Response;

//     await getFilteredRents(mockRequest, mockResponse);

//   expect(mockResponse.status).toHaveBeenCalledWith(200);
//     expect(mockResponse.json).toHaveBeenCalledWith(
//       {
//       bedrooms: 1,
//     }
//     );
//   }, 20000);
// });

// describe('Test getFilteredRents by bedrooms number', () => {
//   test('returns filtered by bedrooms', async () => {
//     const mockRequest = {
//       query: {
//         bedrooms: 4,
//       },
//     } as unknown as Request;

//     const mockResponse = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     } as unknown as Response;

//     await getFilteredRents(mockRequest, mockResponse);

//     expect(mockResponse.status).toHaveBeenCalledWith(200);
//     expect(mockResponse.json).toHaveBeenCalledWith(
//       {
//       bedrooms: 4,
//     }
//     );
//   }, 20000);
// });

// Mock RentModel.find method
jest.mock('../../src/db/rentsdb', () => ({
  getRentByPrice: jest.fn(),
}));

describe('Test getFilteredRents by rent price', () => {
  test('returns filtered rent price', async () => {
    const mockRequest = {
      query: {
        rentmin: '100',
        rentmax: '300',
      },
    } as unknown as Request;

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    // Set up the mock implementation for RentModel.find
    const getRentByPriceMock = jest.requireMock('../../src/db/rentsdb').getRentByPrice;
    getRentByPriceMock.mockResolvedValue([{ rentprice: 200 }, { rentprice: 300 }]);

    await getFilteredRents(mockRequest, mockResponse);

    expect(getRentByPriceMock).toHaveBeenCalledWith({ rentmin: 100, rentmax: 300 });

    //expect(getRentByPriceMock).toHaveBeenCalledWith(100, 300);
    // expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith([
      { rentprice: 200 },
      { rentprice: 300 },
    ]);
  });
});
