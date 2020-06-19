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

//上传优惠券

export const uploadImage = params => {
    return axiosInstance.post("/wx/storage/upload", params).then(res => res.data)
}

export const addCoupon = params => {
    return axiosInstance.post("/wx/ruielife/couponItem/add", params).then(res => res.data)
}

//我的订单-出售优惠券状态更新

export const updateSailCoupon = params => {
    return axiosInstance.patch("/wx/ruielife/couponItem/update", params).then(res => res.data)
}






export function formatDate (date, fmt) {
    if(date==null||date =='')
      return '';
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    }
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + ''
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
      }
    }
      return fmt
  }
  function padLeftZero (str) {
    return ('00' + str).substr(str.length)
  }



