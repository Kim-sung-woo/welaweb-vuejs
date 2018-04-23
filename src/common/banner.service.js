import _ from 'lodash'
import {Observable} from 'rxjs';
import axios from 'axios';

import {API_URL} from '@/common/config'

const serverUrl = API_URL + '/banner';

export default {

  count(queryParams) {
    let params = new URLSearchParams();
    _.forEach(queryParams, (value, key) => {
      params.set(key, JSON.stringify(value));
    });

    return Observable.fromPromise(axios.get(serverUrl + '/count', {
      params: queryParams
    }));
  },

  find(queryParams) {
    return Observable.fromPromise(axios.get(serverUrl + '/find', {
      params: queryParams
    }));
  },

  findOne(queryParams) {
    let params = new URLSearchParams();
    _.forEach(queryParams, (value, key) => {
      params.set(key, JSON.stringify(value));
    });

    return Observable.fromPromise(axios.get(serverUrl + '/findOne', {
      params: queryParams
    }));
  },

  create(banner)  {
    return Observable.fromPromise(axios.post(serverUrl, banner));
  },

  update(banner) {
    return Observable.fromPromise(axios.put(serverUrl, banner));
  },

  remove(_id) {
    let param = new URLSearchParams();
    param.set("_id", _id.toString());

    return Observable.fromPromise(axios.delete(serverUrl, {
      data: {
        search: param
      }
    }));
  },
}
