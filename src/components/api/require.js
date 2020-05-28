import axiosInstance from './config.js'



export const getWeather = params => {
    return axiosInstance.get("/api/weather/city/101030100").then(res => res.data)
}
