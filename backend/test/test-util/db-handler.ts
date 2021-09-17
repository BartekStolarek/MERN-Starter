import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

// setup in-memory database
const mongod = new MongoMemoryServer();

// connect to the in-memory database
const dbConnect = async () => {
  const uri: string = await mongod.getUri();

  const mongooseOpts: object = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };

  await mongoose.connect(uri, mongooseOpts);
};

// drop the in-memory database, close connection and stop
const dbClose = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongod.stop();
};

// Clear the in-memory database
const dbClear = async () => {
  const collections = mongoose.connection.collections;

  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany({});
  }
};

export { dbConnect, dbClose, dbClear };
