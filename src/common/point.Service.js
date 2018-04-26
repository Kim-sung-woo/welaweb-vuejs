import _ from 'lodash'
import {Observable} from 'rxjs';
import axios from 'axios';

import {API_URL} from '@/common/config'
import AppService from '@/common/app.service'

const serverUrl = API_URL + '/point';

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

  create(point)  {
    return Observable.fromPromise(axios.post(serverUrl, point));
  },

  createAttendancePoint(point) {
    return Observable.fromPromise(axios.post(serverUrl + '/attendance', point, {}));
  },

  update(point) {
    return Observable.fromPromise(axios.put(serverUrl, point));
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
