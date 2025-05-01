import { IPayment } from '@interfaces/payments.interface';

export const mockProcessPayment = async (amount: number): Promise<{ success: boolean }> => {
  if (amount > 3000) {
    return { success: false };
  }
  return { success: true };
};
