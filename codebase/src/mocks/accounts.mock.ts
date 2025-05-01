import { IEnergyAccount} from '@interfaces/accounts.interface';


export const mockAccounts: IEnergyAccount[] = [
  { id: 'A001', nmi: '6000000001', type: 'Electricity', name: 'John Smith', address: '12 Smith St, Melbourne VIC 3000' },
  { id: 'A002', nmi: '6000000002', type: 'Electricity', name: 'Jane Doe', address: '45 King St, Geelong VIC 3220' },
  { id: 'A003', nmi: '6000000003', type: 'Electricity', name: 'Alice Kim', address: '88 High St, Ballarat VIC 3350' },
  { id: 'A004', nmi: '6000000004', type: 'Electricity', name: 'Tom Nguyen', address: '22 Bay Rd, Frankston VIC 3199' },
  { id: 'A005', mirn: '5310001234', type: 'Gas', name: 'Emma Li', address: '3 River Dr, Bendigo VIC 3550' },
  { id: 'A006', mirn: '5310001234', type: 'Gas', name: 'Liam Brown', address: '75 Victoria St, Warrnambool VIC 3280' },
  { id: 'A007', mirn: '5310001235', type: 'Gas', name: 'Sophie Wilson', address: '17 Queen St, Traralgon VIC 3844' },
  { id: 'A008', mirn: '5310001236', type: 'Gas', name: 'Noah Clark', address: '20 Bridge Rd, Wodonga VIC 3690' },
  { id: 'A009', mirn: '5310001237', type: 'Gas', name: 'Skyler Bang', address: '2/6 mile end Rd, Carnegie VIC 3163' },

];
