import axiosInstance from './config.js'

//银行

export const getWeather = params => {
    return axiosInstance.get("/api/weather/city/101030100").then(res => res.data)
}

export const getBankList = params => {
    return axiosInstance.post("/wx/ruielife/bank/list",params).then(res => res.data)
}

export const updateUserBankList = params => {
    return axiosInstance.patch("/wx/ruielife/bank/updateUserBank",params).then(res => res.data)
}

//优惠券
export const getCouponList = params => {

    return axiosInstance.get("/wx/ruielife/coupon/list",{params:params}).then(res => res.data)

}

export const searchCouponList = params => {

    return axiosInstance.get("/wx/ruielife/coupon/listByFilter",{params:params}).then(res => res.data)

}