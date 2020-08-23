import express, { NextFunction, Request, Response } from 'express';

type RouteProps = { path: string; handler: (req: Request, res: Response, next: NextFunction) => void };

type ServerProps = {
  port: number;
  routes: Array<RouteProps>;
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

const routes: Array<RouteProps> = [
  {
    path: '/',
    handler: (req: Request, res: Response, next: NextFunction) => {
      console.log(`${req.ip} ${res ? 'true' : 'false'} ${next.name}`);
      res.status(200).send({ data: 'Hello from Eric!' });
    },
  },
];

// Boot express
start({ port: 5000, routes: routes });
