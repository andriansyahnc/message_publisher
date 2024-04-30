import express, {Express, Router} from "express";
import morgan from "morgan";

async function createServer(router: Router): Promise<Express> {
  const app: Express = express();
  app.use(express.json());
  app.use(router);
  app.use(morgan('dev'));
  
  return app;
}

export default createServer;