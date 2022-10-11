import { REGISTER_URL } from '../constants';
import Api from '../index';

class Auth extends Api {
  login(data) {
    return this.execute('post', REGISTER_URL, data);
  }
}

export default Auth;
