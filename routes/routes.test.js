const request = require('supertest');
const app = require('../server');

describe('Weather Endpoints', () => {

  it('should fetch weather', async () => {
    const res = await request(app).get('/api/weather');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('wind_speed');
    expect(res.body).toHaveProperty('temperature_degrees');
  });

  it('should respond with status code 404 if resource is not found', async () => {
    const res = await request(app).get(`/api/noop`);
    expect(res.statusCode).toEqual(404);
  });
});
