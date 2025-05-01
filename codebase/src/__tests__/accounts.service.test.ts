import { getAccountsDetail } from '@services/accounts.services';
import { mockCharges } from '@mocks/charges.mock';
import { mockAccounts } from '@mocks/accounts.mock';

//1. All the accounts in the mock accounts presents
//2. Account has balance
//3. Account show it has credit if balance is negative
//4. Account show it has due if balance is positive
//5. Account show 0 if there is no charge and shows due



jest.mock('../repositories/accounts.repository', () => ({
  getAccounts: jest.fn(() => Promise.resolve(mockAccounts)),
}));
jest.mock('../repositories/charges.repository', () => ({
  getCharges: jest.fn(() => Promise.resolve(mockCharges)),
}));



describe('Account Tests ', () => {
  it('Returns all accounts', async () => {
    const result = await getAccountsDetail();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(mockAccounts.length);
  });

  it('Account shows balance', async () => {
    const result = await getAccountsDetail();
    const account = result.find(a => a.id === 'A001');
    expect(account).toBeDefined();
    expect(typeof account!.balance).toBe('number');
    expect(account!.balanceLabel).toMatch(/Credit|Due/);
  });


  it('BalanceLabele if negative then "Credit"', async () => {
    const result = await getAccountsDetail();
    const account = result.find(a => a.id === 'A007');
    expect(account).toBeDefined();
    expect(account!.balance).toBeLessThan(0);
    expect(account!.balanceLabel).toMatch(/Credit/);
  });

  it('BalanceLabele if positive then "Due"', async () => {
    const result = await getAccountsDetail();
    const account = result.find(a => a.id === 'A006');
    expect(account).toBeDefined();
    expect(account!.balance).toBeGreaterThan(0);
    expect(account!.balanceLabel).toMatch(/Due/);
  });

  it('Account that has no record of charge (balance=0) and show as "Due"', async () => {
    const result = await getAccountsDetail();
    const account = result.find(a => a.id === 'A009');
    expect(account).toBeDefined();
    expect(account!.balanceLabel).toMatch(/Due/);
  });
});
