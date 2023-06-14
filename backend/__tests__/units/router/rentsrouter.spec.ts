import { ExpandCircleDownTwoTone } from '@mui/icons-material';
import { getFilteredRents } from '../../../src/controllers/rentController';
import { Request, Response } from 'express';
const getRentByPrice = require('../../../src/db/rentsdb').getRentByPrice;
// const rent = require('../../../src/db/rentsdb').rent;
// import {filteredRents} from '../../../src/controllers/rentController';


describe('getFilteredRents', () => {
  it('should return filtered rent price', async () => {
    // Arrange
    const expected = [
      {
        _id: '647c92861fb7d425fb09e29a',
        location: 'Auckland',
        suburb: 'Remuera',
        rentprice: 300,
        bedrooms: 1,
        propertytype: 'House',
        __v: 0,
        bathrooms: 1,
        carparks: 1,
      },
      {
        rentprice: 200,
        bedrooms: 1,
        propertytype: 'House',
        __v: 0,
        bathrooms: 1,
        carparks: 0,
      },
      {
        _id:'647c92d21fb7d425fb09e2ac',
        location: 'Auckland',
        suburb: 'Grey Lynn',
        rentprice: 300,
        bedrooms: 5,
        propertytype: 'House',
        __v: 0,
        bathrooms: 4,
        carparks: 2,
      },
    ];

    let body: any[] = [];
    let statusCode: number = 0;
    const myCustomRes = {
      sendStatus: jest.fn(),
      status: (code: number) => {
        statusCode = code;
        return this;
      },
     
      json: ( data: any[] ) => {
        body = data;
        return this;
      },
      
    };
    // Act
    const res = await getFilteredRents(
      { query: { rentmin: 100, rentmax: 300 } } as unknown as Request,
      myCustomRes as unknown as Response
    );
    // Assert
    expect(statusCode).toEqual(200);
		expect(body).toEqual(expected);
  }, 180000);
});

// jest.mock('../../../src/db/rentsdb', () => ({
//   getRentByPrice: jest.fn(),
// }));
// test('returns filtered rent price', async () => {
//     // arrange
//     const mockRequest = {
//               query: {
//                 rentmin: '100',
//                 rentmax: '300',
//               },
//             } as unknown as Request;
//             // act
//      const mockResponse = {
//                   status: jest.fn().mockReturnThis(),
//                   json: jest.fn(),
//             } as unknown as Response;

//       // assert
//       expect(mockResponse.status).toEqual(200);
//     expect(mockResponse.json).toHaveBeenCalledWith([{
//         "_id": "647c92861fb7d425fb09e29a",
//         "location": "Auckland",
//         "suburb": "Remuera",
//         "rentprice": 300,
//         "bedrooms": 1,
//         "propertytype": "House",
//         "__v": 0,
//         "bathrooms": 1,
//         "carparks": 1
//         },
//         {
//         "_id": "647c92991fb7d425fb09e29c",
//         "location": "Auckland",
//         "suburb": "Parnell",
//         "rentprice": 200,
//         "bedrooms": 2,
//         "propertytype": "Townhouse",
//         "__v": 0,
//         "bathrooms": 1,
//         "carparks": 1
//         },]);
//     });
