import axiosClient from "../../axios/AxiosClient"

const bookmarkApi = {
  getData(lang) {
    const url = `bookmark?lang=${lang}`
    return axiosClient.get(url).catch((error: any) => {
      console.log("-----Error", error.message)
      if (error.response) {
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
        console.log(url)
      } else if (error.request) {
        console.log(error.request)
      } else {
        console.log("-----Error", error.message)
      }
      console.log(error.config)
    })
  },
}

export { bookmarkApi }
