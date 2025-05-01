import App from './app';
import IndexRoute from '@routes/index.route';
import AccountRoute from '@routes/accounts.route'
import PaymentRoute from '@routes/payment.routes';


const app = new App([new IndexRoute(), new AccountRoute(), new PaymentRoute()]);

app.listen();
