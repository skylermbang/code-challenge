export interface IEnergyAccount {
    id: string;
    nmi?: string;
    mirn?: string;
    type: 'Electricity' | 'Gas';
    name: string;
    address: string;
  }