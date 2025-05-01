export interface ICharge {
  accountId: string;
  utilityType: 'Electricity' | 'Gas';
  chargeType : 'Due' | 'Payment' | 'Credit';
  amount: number;
}
