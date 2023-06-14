import app from '../../src/app';
import request from 'supertest';

describe('Rent listings API', () => {
	it('should all quote records predefined in the listings from our database', async () => {
		// Arrange
		const expected = [
			{
				_id: "647c92861fb7d425fb09e29a",
				location: "Auckland",
				suburb: "Remuera",
				rentprice: 300,
				bedrooms: 1,
				propertytype: "House",
				__v: 0,
				bathrooms: 1,
				carparks: 1
			},
			{
				_id: "647c92991fb7d425fb09e29c",
				location: "Auckland",
				suburb: "Parnell",
				rentprice: 200,
				bedrooms: 2,
				propertytype: "Townhouse",
				__v: 0,
				bathrooms: 1,
				carparks: 1
			},
			{
				_id: "647c92a01fb7d425fb09e29e",
				location: "Auckland",
				suburb: "Parnell",
				rentprice: 200,
				bedrooms: 1,
				propertytype: "House",
				__v: 0,
				bathrooms: 1,
				carparks: 0
			},
			{
				_id: "647c92a81fb7d425fb09e2a0",
				location: "Auckland",
				suburb: "Grey Lynn",
				rentprice: 500,
				bedrooms: 3,
				propertytype: "Unit",
				__v: 0,
				bathrooms: 2,
				carparks: 2
			},
			{
				_id: "647c92ae1fb7d425fb09e2a2",
				location: "Auckland",
				suburb: "Parnell",
				rentprice: 400,
				bedrooms: 2,
				propertytype: "House",
				__v: 0,
				bathrooms: 1,
				carparks: 1
			},
			{
				_id: "647c92b61fb7d425fb09e2a4",
				location: "Auckland",
				suburb: "Ponsonby",
				rentprice: 360,
				bedrooms: 2,
				propertytype: "Unit",
				__v: 0,
				bathrooms: 2,
				carparks: 1
			},
			{
				_id: "647c92be1fb7d425fb09e2a6",
				location: "Auckland",
				suburb: "Albany",
				rentprice: 450,
				bedrooms: 3,
				propertytype: "Apartment",
				__v: 0,
				carparks: 2
			},
			{
				_id: "647c92c41fb7d425fb09e2a8",
				location: "Auckland",
				suburb: "Epsom",
				rentprice: 350,
				bedrooms: 4,
				propertytype: "Apartment",
				__v: 0,
				bathrooms: 3,
				carparks: 2
			},
			{
				_id: "647c92cb1fb7d425fb09e2aa",
				location: "Auckland",
				suburb: "Takapuna",
				rentprice: 500,
				bedrooms: 5,
				propertytype: "Unit",
				__v: 0,
				bathrooms: 4,
				carparks: 2
			},
			{
				_id: "647c92d21fb7d425fb09e2ac",
				location: "Auckland",
				suburb: "Grey Lynn",
				rentprice: 300,
				bedrooms: 5,
				propertytype: "House",
				__v: 0,
				bathrooms: 4,
				carparks: 2
			}
		]
		;

		// Act
		const res = await request(app).get('/rents/results');

		// Assert
		expect(res.status).toEqual(200);
		expect(res.body).toEqual(expected);
	});
});
