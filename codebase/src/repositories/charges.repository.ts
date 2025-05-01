import { ICharge } from '@interfaces/charges.interface';
import { mockCharges } from '@mocks/charges.mock';

export const getCharges = async (): Promise<ICharge[]> => {
  return Promise.resolve(mockCharges);
};

export const addCharge = async (charge: ICharge): Promise<void> => {
  mockCharges.push(charge);
};