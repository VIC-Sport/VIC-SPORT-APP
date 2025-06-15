import axios from "@/services/axios.customize";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const registerAPI = (email: string, password: string, name: string) => {
  const url = `/api/v1/auth/register`;
  return axios.post<IBackendRes<IRegister>>(url, { name, email, password });
};

export const verifyCodeAPI = (email: string, code: string) => {
  const url = `/api/v1/auth/verify-code`;
  return axios.post<IBackendRes<IRegister>>(url, { email, code });
};

export const resendCodeAPI = (email: string) => {
  const url = `/api/v1/auth/verify-email`;
  return axios.post<IBackendRes<IRegister>>(url, { email });
};

export const loginAPI = (email: string, password: string) => {
  const url = `/api/v1/auth/login`;
  return axios.post<IBackendRes<IUserLogin>>(url, {
    username: email,
    password
  });
};

export const getAccountAPI = () => {
  const url = `/api/v1/auth/account`;
  return axios.get<IBackendRes<IUserLogin>>(url);
};

export const getTopRestaurant = (ref: string) => {
  const url = `/api/v1/restaurants/${ref}`;
  return axios.post<IBackendRes<ITopRestaurant[]>>(url);
};

export const printAsyncStorage = () => {
  AsyncStorage.getAllKeys((err, keys) => {
    // sử dụng hàm của AsyncStorage lấy tất keys đang lưu trữ
    AsyncStorage.multiGet(keys!, (error, stores) => {
      // lấy giá trị luôn
      let asyncStorage: any = {}; // gán vào biến này
      stores?.map((result, i, store) => {
        asyncStorage[store[i][0]] = store[i][1];
      });
      console.log(JSON.stringify(asyncStorage, null, 2)); // và in ra. null và 2 là 2 tham số của stringify giúp format code cho đẹp thôi
    });
  });
};
