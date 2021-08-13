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

describe('/api/account/signup', () => {
  it('should respond with Status 422 when no data provided', (done) => {
    request(app)
      .post('/api/account/signup')
      .send({})
      .expect(422)
      .end(done);
  });

  it('should throw an error for user with not valid name', (done) => {
    request(app)
      .post('/api/account/signup')
      .send({
        name: '',
        email: 'test@user.com',
        password: 'test1234'
      })
      .expect(422)
      .expect({
        message: '"name" is not allowed to be empty'
      })
      .end(done);
  });

  it('should throw an error for user with not valid email', (done) => {
    request(app)
      .post('/api/account/signup')
      .send({
        name: 'Test User',
        email: '',
        password: 'test1234'
      })
      .expect(422)
      .expect({
        message: '"email" is not allowed to be empty'
      })
      .end(done);
  });

  it('should throw an error for user with not valid password', (done) => {
    request(app)
      .post('/api/account/signup')
      .send({
        name: 'Test User',
        email: 'test@user.com',
        password: ''
      })
      .expect(422)
      .expect({
        message: '"password" is not allowed to be empty'
      })
      .end(done);
  });

  it('should register a user with valid signup data', (done) => {
    request(app)
      .post('/api/account/signup')
      .send({
        name: 'Test User',
        email: 'test@user.com',
        password: 'test1234'
      })
      .expect(200)
      .end(done);
  });
});
