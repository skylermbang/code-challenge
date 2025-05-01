import { Request, Response, NextFunction } from 'express';
import { processPayment } from '@services/payments.services';
import { IPayment } from '@interfaces/payments.interface';

class PaymentController {


    public addPayment = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      console.log("checking")
        try {
          const { accountId, amount, cardNumber, expiryMM,expiryYY, utilityType } = req.body;

          const result = await processPayment({
            accountId,
            amount,
            cardNumber,
            expiryMM,
            expiryYY,
            utilityType
          });
      
          if (!result.success) {
            res.status(400).json({ message: result.message });
          }
      
          res.status(200).json({ message: 'Payment processed successfully.' });
        } catch (error) {
          next(error);
        }
      };
}

export default PaymentController;
