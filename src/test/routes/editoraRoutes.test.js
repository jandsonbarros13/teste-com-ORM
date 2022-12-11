import request from 'supertest';
import { describe, it } from '@jest/globals';
import app from '../../app.js';

let server;
beforeEach(() => {
  const port = 3000
  server = app.listen(port)
});

afterEach(() => {
  server.close()
});

describe('GET em /editoras', () => {
  it('Deve retornar uma lista de editoras', async () => {
    await request(app)
        .get('/editoras')
        .set('Accept', 'application/json')
        .expect('content-type', /json/)
        .expect(200);
  });
});
