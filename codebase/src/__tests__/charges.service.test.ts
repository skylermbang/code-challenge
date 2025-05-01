import { processPayment } from '@services/payments.services';
import { mockCharges } from '@mocks/charges.mock';
import {IPayment} from '@interfaces/payments.interface'
import { addCharge,getCharges } from '@repositories/charges.repository';


//1. Payment added correctly
//2. Payment decliend due to invlaid card form
//3. Payment declined due to expired card
//4. Payment declidned due to more than 3000$
//5. Payment declined if the amount is negative
//6. Payment declined if utility type of account not match
//7. Payment decliend if wrong account id 

jest.mock('../repositories/charges.repository', () => ({
  addCharge: jest.fn(() => Promise.resolve()),
}));


describe('Payment Tests', () => {
  it('Payment added correctly', async () => {
    const mockPayment1:IPayment = {
      "accountId":"A008",
       "amount":2000,
       "cardNumber":"0000",
       "expiryMM":12,
       "expiryYY":25,
       "utilityType":"Gas"
  }
  const result = await processPayment(mockPayment1);
    expect(result.success).toBe(true);
    //toHaveBeenCalledWith checking addCharge() with expected data
    expect(addCharge).toHaveBeenCalledWith(
      expect.objectContaining({
        accountId: 'A008',
        amount: 2000,
        chargeType: 'Payment',
        utilityType: 'Gas'
      })
    );
  });


  it('Payment Declined Due to Wrong expiry format', async () => {
    const mockPayment1:IPayment = {
      "accountId":"A008",
       "amount":2000,
       "cardNumber":"0000",
       "expiryMM":13,
       "expiryYY":25,
       "utilityType":"Gas"
  }
  const result = await processPayment(mockPayment1);
    expect(result.success).toBe(false);
  });

  it('Payment Declined Due to Wrong expiry format-2', async () => {
    const mockPayment1:IPayment = {
      "accountId":"A008",
       "amount":2000,
       "cardNumber":"0000",
       "expiryMM":200,
       "expiryYY":25,
       "utilityType":"Gas"
  }
  const result = await processPayment(mockPayment1);
    expect(result.success).toBe(false);
  });

  it('Payment Declined Due to Wrong expiry date', async () => {
    const mockPayment1:IPayment = {
      "accountId":"A008",
       "amount":2000,
       "cardNumber":"0000",
       "expiryMM":4,
       "expiryYY":22,
       "utilityType":"Gas"
  }
  const result = await processPayment(mockPayment1);
    expect(result.success).toBe(false);
  });

  it('Payment declidned due to more than 3000$', async () => {
    const mockPayment1:IPayment = {
      "accountId":"A008",
       "amount":4000,
       "cardNumber":"0000",
       "expiryMM":4,
       "expiryYY":22,
       "utilityType":"Gas"
  }
  const result = await processPayment(mockPayment1);
    expect(result.success).toBe(false);
  });


  it('Payment declidned due to negative amount', async () => {
    const mockPayment1:IPayment = {
      "accountId":"A008",
       "amount":-100,
       "cardNumber":"0000",
       "expiryMM":4,
       "expiryYY":22,
       "utilityType":"Gas"
  }
  const result = await processPayment(mockPayment1);
    expect(result.success).toBe(false);
  });


  it('Payment declidned due account and utility type mismatch', async () => {
    const mockPayment1:IPayment = {
      "accountId":"A008",
       "amount":100,
       "cardNumber":"0000",
       "expiryMM":4,
       "expiryYY":26,
       "utilityType":"Electricity"
  }
  const result = await processPayment(mockPayment1);
    expect(result.success).toBe(false);
  });



  it('Payment declined due to wrong account id', async () => {
    const mockPayment1:IPayment = {
      "accountId":"A011",
       "amount":100,
       "cardNumber":"0000",
       "expiryMM":4,
       "expiryYY":26,
       "utilityType":"Electricity"
  }
  const result = await processPayment(mockPayment1);
    expect(result.success).toBe(false);
  });
});