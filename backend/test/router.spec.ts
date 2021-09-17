import { dbConnect, dbClose, dbClear } from './test-util/db-handler';
import { loginTests, authToken } from './routes/login.route.spec';
import { signupTests } from './routes/signup.route.spec';
import { profileTests } from './routes/profile.route.spec';

beforeAll(async () => {
  await dbConnect();
});

afterAll(async (done) => {
  await dbClear();
  await dbClose();
  done();
});

describe('/api/account/signup', signupTests);
describe('/api/account/login', loginTests);
describe('/api/profile', profileTests);
