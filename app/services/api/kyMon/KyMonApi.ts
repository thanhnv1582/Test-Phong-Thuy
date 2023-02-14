import axiosClient from "../../axios/AxiosClient"

const kyMonApi = {
  getData(ngayThangNam: string, gio: string, phut: string, type: string) {
    const url = `lich-ky-mon?ngayThangNam=${ngayThangNam}&gio=${gio}&phut=${phut}&loai=${type}`
    return axiosClient.get(url).catch((error: any) => {
      if (error.response) {
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
        console.log(url)
      } else if (error.request) {
        console.log(error.request)
      } else {
        console.log("Error", error.message)
      }
      console.log(error.config)
    })
  },
  getDataNha(van: string, huongNha: string, huongCua: string) {
    const url = `lich-ky-mon-nha?van=${van}&huongNha=${huongNha}&huongCua=${huongCua}`
    return axiosClient.get(url).catch((error: any) => {
      if (error.response) {
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
        console.log(url)
      } else if (error.request) {
        console.log(error.request)
      } else {
        console.log("Error", error.message)
      }
      console.log(error.config)
    })
  },
  getDataChienLuoc(startDate: string, endDate: string, kyMonTable: string, huong: string, cachCuc: string, a1: string, a2: string , a3: string, a4: string, a5: string, isH: string, isKV: string, isNgua: string, cachCucBad: string) {
    const url = `chien-luoc?startDate=${startDate}&endDate=${endDate}&kyMonTable=${kyMonTable}&huong=${huong}&cachCuc=${cachCuc}&a1=${a1}&a2=${a2}&a3=${a3}&a4=${a4}&a5=${a5}&isH=${isH}&isKV=${isKV}&isNgua=${isNgua}&cachCucBad=${cachCucBad}`
    return axiosClient.get(url).catch((error: any) => {
      if (error.response) {
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
        console.log(url)
      } else if (error.request) {
        console.log(error.request)
      } else {
        console.log("Error", error.message)
      }
      console.log(error.config)
    })
  },
}

export { kyMonApi }
