import _ from 'lodash'
import {Observable} from 'rxjs';
import axios from 'axios';

import {API_URL} from '@/common/config'

export default {

  login(identifier, password) {
    return Observable.fromPromise(axios.post(API_URL + '/login', {
      identifier: identifier, password: password
    }));
  },

  logout() {
    return Observable.fromPromise(axios.get(API_URL + '/logout'));
  }
}
