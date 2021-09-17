import request from 'supertest';
import testUser from '../test-util/test-user.json';
import { app } from '../../src/app';

let authToken: string = '';

const profileTests = () => {
  it('should throw an error when no auth data provided', (done) => {
    request(app)
      .get('/api/profile')
      .expect(401)
      .end(done);
  });

  it('should fetch auth-token data', (done) => {
    request(app)
      .post('/api/account/login')
      .send({
        email: testUser.email,
        password: testUser.password
      })
      .end((err, res) => {
        if (err) return done(err);
        authToken = res.header['auth-token'];
        return done();
      });
  });

  it('should get profile information when auth data provided', (done) => {
    request(app)
      .get('/api/profile')
      .set('auth-token', authToken)
      .expect(200)
      .then(response => {
        const body: any = response.body;
        expect(body.user.name).toEqual(testUser.name);
        expect(body.user.email).toEqual(testUser.email);
        expect(body.user).toHaveProperty('signupDate');

        done();
      });
  });
};

export { profileTests };
