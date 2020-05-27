import instance from './config.js'


export const getWeather = () => {
    let url = '/api/weather/city/101030100'
    let method = 'get'
    let params = {
        id: 1
    }
    return instance.request({ url, method, params })
        .then(res => {
            return Promise.resolve(res)
        })
        .catch(err => {
            return Promise.reject(err)
        })
}

