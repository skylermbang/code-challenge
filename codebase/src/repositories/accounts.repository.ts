import { IEnergyAccount } from '@interfaces/accounts.interface';
import { mockAccounts } from '@mocks/accounts.mock';

export const getAccounts = async (): Promise<IEnergyAccount[]> => {
  return Promise.resolve(mockAccounts);
};