const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const expressWs = require('express-ws');
const app = express();
expressWs(app);

const port = process.argv.length > 2 ? process.argv[2] : 4000;

// Replace these variables with your MongoDB connection details
const dbName = 'your-db-name';
const uri = 'mongodb+srv://username:password@cluster.mongodb.net/' + dbName + '?retryWrites=true&w=majority';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

var apiRouter = express.Router();
app.use('/api', apiRouter);

// Encourage WebSocket route
app.ws('/api/encourage', (ws, req) => {
  ws.on('message', (msg) => {
    app.getWss().clients.forEach((client) => {
      client.send(msg);
    });
  });
});

// Inspire routes
apiRouter.post('/inspire', async (req, res) => {
  const post = {
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
  };

  try {
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db(dbName);
    const collection = db.collection('inspire');
    await collection.insertOne(post);
    await client.close();

    res.status(201).json({ message: 'Post created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error submitting post' });
  }
});

apiRouter.get('/inspire', async (req, res) => {
  try {
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db(dbName);
    const collection = db.collection('inspire');
    const posts = await collection.find({}).toArray();
    await client.close();

    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving posts' });
  }
});

app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
