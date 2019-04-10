import axios from 'axios'
import qs from 'qs'

export default class Common {
  static get (url, params, callback) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
      }).then((response) => {
        resolve(response)
      }).catch((error) => {
        reject(error)
      })
    })
  }
  static post = (url, params, callback) => {
    return new Promise((resolve, reject) => {
      axios.post(url, qs.stringify({data: params}), {
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
      }).then((response) => {
        resolve(response)
      }).catch((error) => {
        reject(error)
      })
    })
  }
}
