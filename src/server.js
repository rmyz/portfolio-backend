import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import routes from 'routes';
import { serverConfig } from 'config';

const { log, port } = serverConfig;
const app = express();

app.use(bodyParser.json());

Object.keys(routes).forEach(key => {
  app.use(`/${key}`, routes[key]);
});

if (log) {
  app.use(morgan('combined'));
}

app.get('/', (req, res) => {
  res.send('portfolio-backend is running...');
});

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.use((err, req, res, next) => {
  const { httpCode = 500, message = '' } = err;

  logger.error(message);

  res.status(httpCode).json({ error: message || err });

  next();
});

const start = async () => {
  app.listen(port, () => {
    logger.info('Starting API REST');
  });
};

export { start, app };
