import { ICharge } from '@interfaces/charges.interface';

export const mockCharges: ICharge[] = [
  // Electricity Charge
  { accountId: 'A001', utilityType: 'Electricity', chargeType: 'Credit', amount: 5.00 },
  { accountId: 'A001', utilityType: 'Electricity', chargeType: 'Due', amount: 120.00 },
  { accountId: 'A002', utilityType: 'Electricity', chargeType: 'Due', amount: 80.00 },
  { accountId: 'A002', utilityType: 'Electricity', chargeType: 'Due', amount: 25.50 },
  { accountId: 'A002', utilityType: 'Electricity', chargeType: 'Due', amount: 5.00 },
  { accountId: 'A003', utilityType: 'Electricity', chargeType: 'Due', amount: 60.00 },
  { accountId: 'A004', utilityType: 'Electricity', chargeType: 'Due', amount: 20.00 },
  { accountId: 'A004', utilityType: 'Electricity', chargeType: 'Credit', amount: 30.00 },

  // Gas Charge
  { accountId: 'A005', utilityType: 'Gas', chargeType: 'Due', amount: 45.75 },
  { accountId: 'A005', utilityType: 'Gas', chargeType: 'Credit', amount: 15.25 },
  { accountId: 'A006', utilityType: 'Gas', chargeType: 'Due', amount: 55.00 },
  { accountId: 'A006', utilityType: 'Gas', chargeType: 'Due', amount: 20.00 },
  { accountId: 'A007', utilityType: 'Gas', chargeType: 'Credit', amount: 100.00 },
  { accountId: 'A008', utilityType: 'Gas', chargeType: 'Due', amount: 10 },
  { accountId: 'A008', utilityType: 'Gas', chargeType: 'Due', amount: 15.00 },
  { accountId: 'A008', utilityType: 'Gas', chargeType: 'Due', amount: 5.00 }
];
