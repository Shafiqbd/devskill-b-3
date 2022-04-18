import { store } from "../redux/store";
import FetchApi from "../utils/api/index";

export default function authHeader() {
  const { storageStore } = store.getState();
  const { user } = storageStore;

  // Set the AUTH token for any request
  if (user !== null) {
    const { userInfo } = user;
    FetchApi.interceptors.request.use(function (config) {
      if (userInfo && userInfo.token) {
        config.headers.Authorization = `bearer ${userInfo.token}`;
      }
      return config;
    });
  }
}
