import axios from 'axios'

export default function ajax (url, data = {}, type = 'GET') {
  return new Promise((resolve, reject) => {
    let promise
    type = type.toUpperCase()
    if (type === 'GET') { // get请求
      let strData = ''
      Object.keys(data).forEach(key => {
        strData += `${key}=${data[key]}&`
      })
      if (strData !== '') {
        strData = strData.slice(0, strData.lastIndexOf('&'))
        url = url + '?' + strData
      }
      promise = axios.get(url)
    } else { // post请求
      promise = axios.post(url, data)
    }
    promise.then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(error)
    })
  })
}
