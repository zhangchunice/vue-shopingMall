import axios from 'axios'

// export function httpGet (url, params) {
//   return axios({ url, params, method: 'get' })
// }

// export function httpPost (url, data) {
//   return axios({ url, data, method: 'post' })
// }

axios.defaults.timeout = 10000 // 超时时间
axios.defaults.baseURL = '/api' // 默认地址

// this.$axios.post("mark",params)
// this.$axios.get("/book/catalog/"+userId)

export default axios
