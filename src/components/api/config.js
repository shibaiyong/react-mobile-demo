
import axios from 'axios'

import { BrowserRouter } from 'react-router-dom'

// import createBrowserHistory from 'history/createBrowserHistory'

// const { history, location } = new BrowserRouter()

let instance = axios.create({
  baseURL: 'http://t.weather.sojson.com'
})

//请求的全局拦截器
instance.interceptors.request.use(
  config => {
    
    config.headers.Authorization = sessionStorage.getItem('RyxToken')
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

instance.interceptors.response.use(
    response => {
        if (response.data.code == 2002) {
            // return router.replace('/login')
        }
        return response
    },
    error => {
        //history.push('/mine/login')
        //location.href = 'http://localhost:8080/mine/login?id=1'
        return Promise.reject(error)
    }
)

export default instance
