import { ExpandCircleDownTwoTone } from "@mui/icons-material";
import { getFilteredRents } from "../../../src/controllers/rentController";

const getRentByPrice = require('../../../src/db/rentsdb').getRentByPrice;


jest.mock('../../../src/db/rentsdb', () => ({
  getRentByPrice: jest.fn(),
}));
test('returns filtered rent price', async () => {
    // arrange
    const mockRequest = {
              query: {
                rentmin: '100',
                rentmax: '300',
              },
            } as unknown as Request;
            // act
     const mockResponse = {
                  status: jest.fn().mockReturnThis(),
                  json: jest.fn(),
            } as unknown as Response;
                
      // assert  
      expect(mockResponse.status).toEqual(200);
    expect(mockResponse.json).toHaveBeenCalledWith([{
        "_id": "647c92861fb7d425fb09e29a",
        "location": "Auckland",
        "suburb": "Remuera",
        "rentprice": 300,
        "bedrooms": 1,
        "propertytype": "House",
        "__v": 0,
        "bathrooms": 1,
        "carparks": 1
        },
        {
        "_id": "647c92991fb7d425fb09e29c",
        "location": "Auckland",
        "suburb": "Parnell",
        "rentprice": 200,
        "bedrooms": 2,
        "propertytype": "Townhouse",
        "__v": 0,
        "bathrooms": 1,
        "carparks": 1
        },]);
    });