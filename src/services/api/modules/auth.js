import { LOGIN_URL, REGISTER_URL } from '../constants';
import Api from '../index';

class Auth extends Api {
  register(data) {
    return this.execute('post', REGISTER_URL, data);
  }
  login(data) {
    return this.execute('post', LOGIN_URL, data);
  }

}

export default Auth;
