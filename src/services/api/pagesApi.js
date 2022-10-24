import Auth from '../api/modules/auth';
import Payment from './modules/payment';

const authApi = new Auth();
const paymentApi = new Payment()

export {
  authApi,
  paymentApi
};
