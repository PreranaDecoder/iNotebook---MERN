const connectToMongo = require('./db')
const express = require('express')

connectToMongo();
const app = express()
const port = 5000

// Middleware to parse JSON
app.use(express.json());

// Basic test route
app.get('/', (req, res) => {
  res.send('Hello PRB!');
});

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})