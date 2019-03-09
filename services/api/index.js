import axios from "axios";


export const facade = {};

const api = axios.create();

facade.request = config => api.request(config);

["get", "head"].forEach(method => {
  facade[method] = (url, config) => facade.request({ ...config, method, url });

});
["delete", "post", "put", "patch"].forEach(method => {
  facade[method] = (url, data, config) =>
  facade.request({ ...config, method, url, data });
  
});

class API {
  static fetchGet(url) {
    console.log("this is index and url is ",url)
    return facade.get(url, { withCredentials: true});
  }
  static fetchPost(url, data) {
    return facade.post(url,data,{withCredentials: true});
  }
  static fetchDelete(url, data) {
    return facade.delete(url,data,{withCredentials: true});
  }
  static fetchPut(url, data) {
    return facade.put(url,data,{withCredentials: true});
  }
}

export default API;