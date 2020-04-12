import express from 'express';
import { APP_PORT } from 'src/config';

const app: express.Application = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(APP_PORT, function () {
  console.log(`App is listening on port ${APP_PORT}!`);
});
