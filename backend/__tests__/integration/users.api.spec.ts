import app from '../../src/app';
import request from 'supertest';

describe('users listings API', () => {
  it('should find all records inside of our users database', async () => {
    // Arrange
    const expected = [
      {
        _id: '64785954d4e839dd0142e3c5',
        username: 'HomesliceJoJo',
        email: 'jojo@test.com',
        __v: 0,
      },
      {
        _id: '64786fa8477203f915d75ef3',
        username: 'Antonio',
        email: 'antonio@codes.com',
        __v: 0,
      },
      {
        _id: '647c06202b5656d9d5f5f359',
        username: 'aaa',
        email: 'a@a.com',
        __v: 0,
      },
      {
        _id: '64879c32a0d0754d044251b3',
        username: 'ThunderKill',
        email: 'Killua@zoldyck.com',
        __v: 0,
      },
    ];

    // Act
    const res = await request(app).get('/users');

    // Assert
    expect(res.status).toEqual(200);
    expect(res.body).toEqual(expected);
  });
});
