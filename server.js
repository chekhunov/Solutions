const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const server = require('http').createServer(app);
const port = 9999;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const form = [];

app.get('/form', cors(corsOptions), (req, res) => {
  res.json(form);
});

app.post('/form', function (request, response) {
  if (!request.body) return response.sendStatus(400);
  console.log(request.body);
  form.push(request.body);
  response.send(`${request.body.name} - ${request.body.phone}`);
});

server.listen(port, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log('Сервер запущен');
});
