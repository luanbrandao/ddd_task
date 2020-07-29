import express, { Request, Response, NextFunction } from 'express';
import '@shared/infra/typeorm';
import '@shared/container';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  console.log(err);
  return response.status(500).json({
    status: 'error',
    message: err.message,
  });
});

app.listen(3333, () => {
  console.log('Server started on port 3333');
});
