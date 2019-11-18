import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

const router = express.Router();

router.get('/ping', (_req, res) => {
  res.statusCode = 200;
  const response = {
    data: 'pong'
  }
  res.send(response)
});

app.use('/api', router);

const server = app.listen('5000', () => {
  const host = 'localhost';
  const port = server.address().port;

  console.log("Backend is listening at http://%s:%s", host, port)
});
