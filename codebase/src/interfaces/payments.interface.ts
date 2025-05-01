export interface IPayment {
  accountId: string;
  amount: number;
  cardNumber: string;
  expiryMM: number;
  expiryYY: number;
  utilityType: 'Electricity' | 'Gas';
}