import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = new MongoClient(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  return client;
}

export async function makeProfile(client, collection, document) {
  const db = client.db("stock-health");
  const result = await db.collection(collection).insertOne(document);
  return result;
}

export async function updateStocks(client, collection, stocks, email) {
  const db = client.db("stock-health");
  const result = await db
    .collection(collection)
    .updateOne({ email: email }, { $set: { stocks: stocks } });
  return result;
}

export async function getProfile(client, collection, filter) {
  const db = client.db("stock-health");
  const documents = await db.collection(collection).find(filter).toArray();
  return documents;
}
