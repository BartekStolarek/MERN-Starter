import request from 'supertest';
import { dbConnect, dbClose, dbClear } from '../test-utils/db-handler';
import { app } from '../../src/app';

beforeAll(async () => {
  await dbConnect();
});

afterEach(async () => {
  await dbClear();
});

afterAll(async () => {
  await dbClose();
});

describe('/api/account/login', () => {
  it('should respond with Status 400 when no data provided', (done) => {
    request(app)
      .post('/api/account/login')
      .send({})
      .expect(400)
      .end(done);
  });
});
