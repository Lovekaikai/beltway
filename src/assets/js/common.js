import axios from 'axios'
import qs from 'qs'

export default class Common {
  static get (url, params, callback) {
    return new Promise((resolve, reject) => {
      axios.get(url).then((response) => {
        resolve(response)
      }).catch((error) => {
        resolve(error)
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
  static formatTime (timestamp, type) {
    let tem =
    String(timestamp).length <= 10
      ? Number(timestamp) * 1000
      : Number(timestamp)
    const d = new Date(tem)
    var years =
    d.getFullYear() > 9 ? '' + d.getFullYear() : '0' + d.getFullYear()
    var month =
    d.getMonth() + 1 > 9 ? '' + (d.getMonth() + 1) : '0' + (d.getMonth() + 1)
    var days = d.getDate() > 9 ? '' + d.getDate() : '0' + d.getDate()
    var hours = d.getHours() > 9 ? '' + d.getHours() : '0' + d.getHours()
    var minutes = d.getMinutes() > 9 ? '' + d.getMinutes() : '0' + d.getMinutes()
    var sec = d.getSeconds() > 9 ? '' + d.getSeconds() : '0' + d.getSeconds()
    // var seconds =
    // d.getSeconds() > 9 ? "" + d.getSeconds() : "0" + d.getSeconds();
    return type === 'date'
      ? years + '年' + month + '月' + days
      : years + '年' + month + '月' + days + '日' + hours + ':' + minutes + ':' + sec
  }
}
