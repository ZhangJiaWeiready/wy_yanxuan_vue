
import axios from 'axios'

/*
调用完这个ajax之后 返回一个promise对象 这个promise对象直接返回data数据
 */
export default function ajax(url, data={}, type='GET') {
  //url = /login?username=x&keword=xx

  return new Promise( (resolve, reject) => {
    // 如果是get的话data需要拼串拼接到url上
    let promise = ''
    if (type === 'GET') {
      let dataStr = ''
      Object.keys(data).forEach(key=>{
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== ''){
        dataStr= dataStr.substring(0,dataStr.lastIndexOf('&'))
        url = '?'+dataStr
      }
      promise = axios.get(url)
    } else {
      promise = axios.post(url,data)
    }
    promise.then(function(response){
      resolve(response.data)
    }).catch(function (err) {
      reject(err)
    })
  })

}
