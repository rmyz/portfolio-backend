import express from 'express';
import bodyParser from 'body-parser';

import routes from './routes';
import { port } from './config';

const app = express();

app.use(bodyParser.json());

Object.keys(routes).forEach(key => {
  app.use(`${key}`, routes[key]);
});

app.get('/', (req, res) => {
  res.send('portfolio-backend is running...');
});

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.use((err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.log('There has been an error: ', err);
  const { httpCode = 500, message = '' } = err;

  res.status(httpCode).json({ error: message || err });

  next();
});

const start = async () => {
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log('Starting API Rest');
  });
};

export { start };
