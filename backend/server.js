const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = 3000;

// MongoDB 연결 설정
const uri = "mongodb+srv://Admin:<password>@cluster0.ptftvh8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// CRUD 기능 구현
async function crudOperations() {
  await client.connect();

  // Create
  const newData = { name: 'John Doe', age: 30 };
  await client.db('mydb').collection('mycollection').insertOne(newData);

  // Read
  const result = await client.db('mydb').collection('mycollection').find({}).toArray();
  console.log(result);

  // Update
  const filter = { name: 'John Doe' };
  const update = { $set: { age: 31 } };
  await client.db('mydb').collection('mycollection').updateOne(filter, update);

  // Delete
  await client.db('mydb').collection('mycollection').deleteOne(filter);

  await client.close();
}

// 웹 페이지 라우팅
app.get('/', async (req, res) => {
  await crudOperations();
  res.send('CRUD operations completed!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
