require('dotenv').config();

const express = require('express');

const app = express();

const { NODE_ENV, PORT } = process.env;

const port = PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello Elastic Beanstalk! NODE_ENV: ' + NODE_ENV);
});

app.listen(port, () => {
  console.log(
    `App listening at http://localhost:${port} - NODE_ENV: ${NODE_ENV}`
  );
});
