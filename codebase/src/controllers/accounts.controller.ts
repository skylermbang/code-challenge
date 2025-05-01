import { NextFunction, Request, Response } from 'express';
import {getAccountsDetail}  from '@services/accounts.services';


class AccountController {
    public getAllAccounts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
          const accounts = await getAccountsDetail(); 
          res.status(200).json(accounts);
        } catch (error) {
          next(error);
        }
      };

      public getAnAccount = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
          const { accountId } = req.params;
          const accounts = await getAccountsDetail();
          const account = accounts.find(account => account.id === accountId);
      
          if (!account) {
            res.status(404).json({ message: `Account : ${accountId} not found.` });
            return;
          }
          res.status(200).json(account);
        } catch (error) {
          next(error);
        }
      };
      
}

export default AccountController;
