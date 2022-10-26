import { EXCEL_EXPORT_URL, PAYMENT_METHOD_URL } from '../constants';
import Api from '../index';

class Payment extends Api {
  payment_method(data) {
    return this.execute('post', PAYMENT_METHOD_URL, data);
  }
  excelExport(data) {
    return this.execute('post', EXCEL_EXPORT_URL, data);
  }
}

export default Payment;
