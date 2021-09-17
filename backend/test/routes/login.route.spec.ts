import request from 'supertest';
import testUser from '../test-util/test-user.json';
import { app } from '../../src/app';

const loginTests = () => {
  it('should throw an error when no login data provided', (done) => {
    request(app)
      .post('/api/account/login')
      .send({})
      .expect(403)
      .end(done);
  });

  it('should throw an error for user with empty password', (done) => {
    request(app)
      .post('/api/account/login')
      .send({
        email: testUser.email,
        password: ''
      })
      .expect(403)
      .expect({
        message: '"password" is not allowed to be empty'
      })
      .end(done);
  });

  it('should throw an error for user with wrong password', (done) => {
    request(app)
      .post('/api/account/login')
      .send({
        email: testUser.email,
        password: 'wrongPassword'
      })
      .expect(403)
      .expect({
        message: 'Email or password is wrong.'
      })
      .end(done);
  });

  it('should login user with correct login data', (done) => {
    request(app)
      .post('/api/account/login')
      .send({
        email: testUser.email,
        password: testUser.password
      })
      .expect(200)
      .end(done);
  });
};

export { loginTests };
