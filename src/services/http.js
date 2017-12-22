import _ from 'lodash'
import axios from 'axios'

class HttpResponse {
  static error (error) {
    var tmp = new HttpResponse(error)
    tmp.error = true
    return tmp
  }

  constructor (data) {
    this.error = false
    this.data = data
    this.empty = _.isEmpty(data)
  }
}

const HTTP_METHOD = {
  get: 'get',
  post: 'post',
  delete: 'delete',
  put: 'put'
}

const processHttp = (method, url, data) => {
  return axios({
    method: method,
    url: url,
    data: data,
    withCredentials: true
  }).then(response => {
    return new HttpResponse(response)
  }).catch(error => {
    return Promise.resolve(HttpResponse.error(error))
  })
}

export const http = {
  get: url => processHttp(HTTP_METHOD.get, url),
  post: (url, data) => processHttp(HTTP_METHOD.post, url, data),
  put: (url, data) => processHttp(HTTP_METHOD.put, url, data),
  delete: url => processHttp(HTTP_METHOD.delete, url)
}

export default http
