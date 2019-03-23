/**
 * Created by superman on 17/2/16.
 * http配置
 */

import axios from 'axios'
import QS from "qs"
// import store from './store/store'
// import * as types from './store/types'
// import router from './router'

// axios 配置
axios.defaults.timeout = 5000
// axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.baseURL = '/api/'
// axios.defaults.baseURL = 'http://192.168.1.5:8080'

// http request 拦截器
axios.defaults.responseType = "json";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
axios.interceptors.request.use(
  config => {
    // if (store.state.token) {
    //   config.headers.Authorization = `token ${store.state.token}`
    // }
    return config
  },
  err => {
    return Promise.reject(err)
  },
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
    //   switch (error.response.status) {
    //     case 401:
    //       // 401 清除token信息并跳转到登录页面
    //       store.commit(types.LOGOUT)
          
    //       // 只有在当前路由不是登录页面才跳转
    //       router.currentRoute.path !== 'login' &&
    //         router.replace({
    //           path: 'login',
    //           query: { redirect: router.currentRoute.path },
    //         })
    //   }
    }
    // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    return Promise.reject(error.response.data)
  },
)

/** 
 * get方法，对应get请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function get(url, params){    
  return new Promise((resolve, reject) =>{        
      axios.get(url, {            
          params: params        
      })        
      .then(res => {            
          resolve(res.data);        
      })        
      .catch(err => {            
          reject(err.data)        
      })    
  });
}
/** 
* post方法，对应post请求 
* @param {String} url [请求的url地址] 
* @param {Object} params [请求时携带的参数] 
*/
export function post(url, params) {    
  return new Promise((resolve, reject) => {         
      axios.post(url, QS.stringify(params))        
      .then(res => {            
          resolve(res.data);        
      })        
      .catch(err => {            
          reject(err.data)        
      })    
  });
}



// export default axios