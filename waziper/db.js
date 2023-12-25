
const { MongoClient } = require('mongodb');

const mongoUri = 'mongodb+srv://gabbar1037:Vivek2158@cluster0.kamy8mp.mongodb.net';
const dbName = 'salestube';

const connectToDatabase = async () => {
  console.log(`========================connectToDatabase`);
  const client = new MongoClient(mongoUri);
  console.log(`========================connectToDatabase ${client}`);
  await client.connect();
  
  console.log(`========================connectToDatabase connect`);
  const database = client.db(dbName);
  console.log(`========================connectToDatabase ${database}`);
  return {
    client,
    database,
  };
};



module.exports = { connectToDatabase };