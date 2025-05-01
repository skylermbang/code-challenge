import { ICharge } from '@interfaces/charges.interface';
import { IPayment } from '@interfaces/payments.interface';
import { getAccounts } from '@repositories/accounts.repository';
import { addCharge,getCharges } from '@repositories/charges.repository';
import { mockProcessPayment } from '@mocks/paymentProcess.mock';

export const processPayment = async (
  payment: IPayment
): Promise<{ success: boolean; message?: string }> => {
  const { accountId, amount, cardNumber, expiryMM, expiryYY, utilityType } = payment;
  // Can also validate the card number using external API
   
  const paddedMonth = String(expiryMM).padStart(2, '0');
  const expiryDate = new Date(`20${expiryYY}-${paddedMonth}-01`);
  if (isNaN(expiryDate.getTime()) || expiryDate < new Date()) {
    return { success: false, message: 'Card is expired or invalid expiry format.' };
  }

  const accounts = await getAccounts(); // returns IEnergyAccount[]
  const matchedAccount = accounts.find(account => account.id === accountId);
  if (!matchedAccount){
    return { success: false, message: 'Invalide Account Id ' };
  }
  if (matchedAccount.type !== utilityType) {
    return { success: false, message: 'Utility type mismatch for account' };
  }


  const result: { success: boolean } = await mockProcessPayment(payment.amount)
  if (!result.success) {
    return { success: false, message: 'Payment rejected by card processor.' };
  }

  const newCharge: ICharge = {
    accountId,
    utilityType,
    chargeType: 'Payment',
    amount
  };
  await addCharge(newCharge);

  return { success: true };
};
