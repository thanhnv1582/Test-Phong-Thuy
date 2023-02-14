import axiosClient from "../../axios/AxiosClient"

const thienCanDiaChiApi = {
  getData(ngayThangNam: string, gio: string, loaiLich: string, phut: string) {
    const url = `thien-can-dia-chi?ngayThangNam=${ngayThangNam}&gio=${gio}&loaiLich=${loaiLich}&phut=${phut}`
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

export { thienCanDiaChiApi }
