import express, { Application, NextFunction, Request, Response } from 'express';

type ServerProps = {
  port: number;
  routes: Array<any>;
};

/**
 *  1 start a express server
 **/
const start = ({ port, routes }: ServerProps) => {
  const app = express();
  routes.map((_route) => app.use(_route.path, _route.handler));
  app.listen(port, () => console.log(`Server is listening on port ${port}!`));
  return app;
};

const routes: Array<any> = [
  {
    path: '/',
    handler: (req: Request, res: Response, next: NextFunction) => {
      res.status(200).send({ data: 'Hello from Eric!' });
    },
  },
];

// Boot express
start({ port: 5000, routes: routes });
