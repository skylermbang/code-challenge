import { Router } from 'express';
import PaymentController from '@controllers/payments.controller';
import { IRoutes } from '@interfaces/routes.interface';

class PaymentRoute implements IRoutes {
  public path = '/payments';
  public router = Router();
  public accountController = new PaymentController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post('/', this.accountController.addPayment);

  }
}

export default PaymentRoute;
