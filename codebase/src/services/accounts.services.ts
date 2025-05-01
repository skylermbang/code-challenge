import { getAccounts } from '@repositories/accounts.repository';
import { getCharges } from '@repositories/charges.repository';
import { IEnergyAccount} from '@interfaces/accounts.interface';
import { ICharge } from '@interfaces/charges.interface';

interface IAccountWithBalance extends IEnergyAccount {
  balance: number;
  balanceLabel : 'Credit'|'Due';
}

export const getAccountsDetail = async (): Promise<IAccountWithBalance[]> => {
  const accounts = await getAccounts();
  const charges = await getCharges();

  return accounts.map(account => {
    const balance = charges
      .filter(charge => charge.accountId === account.id)
      .reduce((sum, charge) => {
        return charge.chargeType === 'Due'
          ? sum + charge.amount
          : sum - charge.amount;
      }, 0);

    return {
      ...account,
      balance: parseFloat(balance.toFixed(2)),
      balanceLabel: balance < 0 ? 'Credit' : 'Due'
    };
  });

};

  


  
