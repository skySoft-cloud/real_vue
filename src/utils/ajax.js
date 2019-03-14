import axios from "axios"
import qs from "qs"

let base_url = "../static/test";

/**
 * get请求
 */
const get = (params)=> {
  return axios.get(`${base_url}/${params}`).then((res)=>res.data).catch((err)=> {
    console.log(err)
  })
}

/**
 * post请求
 */
const post = (params, data)=> {
  return axios.get(`${base_url}/${params}`, qs.stringify(data)).then((res)=>res.data).catch((err)=> {
    console.log(err)
  })
}

export {
  get,
  post
}
