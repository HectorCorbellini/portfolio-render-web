import request from 'supertest';
import { describe, it, expect } from 'vitest';
import app from '../server.js';

describe('POST /api/open (Integration)', () => {
  it('should return 400 if no path provided', async () => {
    const res = await request(app).post('/api/open').send({});
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error', 'No path provided');
  });

  it('should return success for unknown path', async () => {
    const res = await request(app)
      .post('/api/open')
      .send({ path: '/tmp' });
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('success', true);
    expect(res.body).toHaveProperty('message');
  });
});
