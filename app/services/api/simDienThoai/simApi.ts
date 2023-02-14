import axiosClient from "../../axios/AxiosClient"

const SimDienThoaiApi = {
  phanTichSdt(sdt: string, hoten: string, namSinh) {
    const url = "/phone-number-analysis"
    return axiosClient.post(url, { SoDienThoai: sdt, HoTen: hoten, NamSinh: namSinh })
  },
}

export default SimDienThoaiApi
