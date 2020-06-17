import axios from 'axios'
export default function request(config) {
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:3000/api'
  })
  //! 返回个instance实例到then这是用promise实现的
  return instance(config);
}