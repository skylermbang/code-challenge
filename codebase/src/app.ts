import express, { Request, Response,NextFunction } from 'express';
import { IRoutes } from '@interfaces/routes.interface';

class App {
  public app: express.Application;
  public port: string | number;

  constructor(routes: IRoutes[]) {
    this.app = express();
    this.port = 3000;

    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.initializeErrorHandling();
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening port ${this.port}`);
    });
  }

  public getServer() {
    return this.app;
  }

  private initializeMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeRoutes(routes: IRoutes[]) {
    routes.forEach((route) => {
      this.app.use(route.path || '/', route.router);
    });
  }


  //Error log + prevent server crashing
  private initializeErrorHandling() {
    // 404 error
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      res.status(404).json({ message: 'Route not found' });
    });
  
    // Global Error 
    this.app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      console.error(err.stack);
      res.status(500).json({ message: err.message || 'Internal Server Error' });
    });
  }
}

export default App;
