import { Router } from 'express';
import AccountController from '@controllers/accounts.controller';
import { IRoutes } from '@interfaces/routes.interface';

class AccountRoute implements IRoutes {
  public path = '/accounts';
  public router = Router();
  public accountController = new AccountController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/', this.accountController.getAllAccounts);
    this.router.get('/:accountId', this.accountController.getAnAccount);
  }
}

export default AccountRoute;
