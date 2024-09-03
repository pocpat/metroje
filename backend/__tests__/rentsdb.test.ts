import mongoose from 'mongoose';
import { RentModel, getRents, createRent } from '../src/db/rentsdb';
import { MongoMemoryServer } from 'mongodb-memory-server';

describe('rentsdb', () => {
    let mongoServer: MongoMemoryServer;

    beforeAll(async () => {
        mongoServer = await MongoMemoryServer.create();
        await mongoose.connect(mongoServer.getUri(), { dbName: "verifyMASTER" });
    });

    afterAll(async () => {
        await mongoose.disconnect();
        await mongoServer.stop();
    });

    it('should create a rent entry', async () => {
        const rentData = {
            location: 'Downtown',
            suburb: 'Central',
            rentprice: 1200,
            bedrooms: 2,
            bathrooms: 1,
            propertytype: 'Apartment',
            carparks: 1,
        };

        const rent = await createRent(rentData);
        expect(rent).toMatchObject(rentData);
    });

    it('should retrieve rents', async () => {
        const rents = await getRents();
        expect(rents).toBeInstanceOf(Array);
    });

    // Add more tests here for each function in rentsdb.ts
});
