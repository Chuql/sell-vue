import axios from 'axios'

export default function ajax (url, data = {}, type = 'GET') {
  let promise
  type = type.toUpperCase()
  if (type === 'GET') {
    let strData = ''
    Object.keys(data).forEach(key => {
      strData += `${key}=${data[key]}&`
    })
    if (strData !== '') {
      strData = strData.slice(0, strData.lastIndexOf('&'))
    }
    url = url + '?' + strData
    promise = axios.get(url)
  } else {
    promise = axios.post(url, data)
  }
  return promise
}
