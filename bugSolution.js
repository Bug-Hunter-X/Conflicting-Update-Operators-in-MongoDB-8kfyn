```javascript
const MongoClient = require('mongodb').MongoClient;

async function updateDocument() {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('myDatabase');
    const collection = database.collection('myCollection');

    // Correct update operation using only $set
    const result = await collection.updateOne({ name: 'John Doe' }, { $set: { age: 31 } });
    console.log(result);
  } finally {
    await client.close();
  }
}

updateDocument();
```