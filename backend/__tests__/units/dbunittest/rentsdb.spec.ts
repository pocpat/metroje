/// <reference types="jest" />
// import { Query, Document } from 'mongoose';
import { RentModel } from '../../../src/db/rentsdb';
import { getRentByLocation } from '../../../src/db/rentsdb';
import { getRentBySuburb } from '../../../src/db/rentsdb';
import { describe, expect, test } from '@jest/globals';

test('should return a list of rents by location', () => {
  expect(getRentByLocation('Auckland')).toStrictEqual(
    RentModel.find({ location: 'Auckland' })
  );
});
test('should return a list of rents by suburb', () => {
  expect(getRentBySuburb('Takapuna')).toStrictEqual(
    RentModel.find({ suburb: 'Takapuna' })
  );
});

test('should return a null of rents by empty location', () => {
  expect(getRentByLocation('')).toStrictEqual(RentModel.find({ location: '' }));
});

test('should return a null of rents by empty suburb', () => {
  expect(getRentBySuburb('')).toStrictEqual(RentModel.find({ suburb: '' }));
});
