import axios from "axios"
import qs from "qs"
import vue from "vue"


/**
 * 配置环境所需的不同URL
 */
let base_url = "";
switch (process.env.NODE_ENV) {
  case "development":
    base_url = "../static/test/";
    break;
  case "production":
    base_url = "../static/test/";
    break;
  case "debug":
    base_url = "../static/test/";
    break;
}

/**
 * 基础请求方法
 */
function baseRequest(options) {
  // 1.封装请求所需要的参数
  let obj = {
    method: options.method,
    url: base_url + options.url
  }
  // 2.传递了参数需要带上参数
  if (options.data) {
    obj.data = options.data
  }
  // TODO 这里还可以检测token之类的，加上自己的业务逻辑

  // 3.设置超时时间
  axios.defaults.timeout = 10000;

  // 4.正式发起请求
  return axios(obj).then((res)=> {
    return res.data;
  }).catch((err)=> {
    console.log(err)
  })
}

/**
 * get请求
 */
async function get(options) {
  options.method = "get";
  return baseRequest(options);
}

/**
 * post请求
 */
async function post(options) {
  options.method = "post";
  options.data = qs.stringify(options.data);
  return baseRequest(options);
}

// 请求拦截器
axios.interceptors.request.use(
  config => {
    // 每次发送请求之前判断是否存在token
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况，此处token一般是用户完成登录后储存到localstorage里的
    token && (config.headers.Authorization = token)
    return config
  },
  error => {
    return Promise.error(error)
  })

/**
 * 响应拦截器设置
 */
axios.interceptors.response.use(
  response=> {
    if (response.status == 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  error=> {
    if (err.response) {
      switch (err.response.code) {
        case 40103:
          router.replace({path: '/login'});
          localStorage.removeItem("tokenValue");
          break;
      }
      return Promise.reject(error.response.data);
    }
  }
)

export {
  get,
  post
}
