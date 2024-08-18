import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

export const client = (() => {
  return axios.create({
    // baseURL: process.env.REACT_BASE_URL,
    baseURL: "/",
    headers: {
      Accept: "application/json, text/plain, */*",
    },
  });
})();

export const request = async (options: AxiosRequestConfig) => {
  const onSuccess = (response: AxiosResponse) => {
    const { data } = response;
    return data;
  };

  const onError = function (error: AxiosError) {
    return Promise.reject({
      message: error.message,
      code: error.code,
      response: error.response,
    });
  };

  return client(options).then(onSuccess).catch(onError);
};

client.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = localStorage.getItem("STORAGE_TOKEN.ACCESS_TOKEN");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  (res: AxiosResponse) => {
    return res; // Simply return the response
  },
  async (error) => {
    const status = error.response ? error.response.status : null;

    if (status === 401) {
      try {
        // const refreshTokenFromStorage = localStorage.getItem(
        //   "STORAGE_TOKEN.REFRESH_TOKEN"
        // );
        // const { accessToken, refreshToken } = await AuthService.refresh(
        //   refreshTokenFromStorage
        // );

        // LocalStorageService.setTokens(accessToken, refreshToken);
        // client.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

        // return await client(originalConfig);
      } catch (error) {
        return Promise.reject(error);
      }
    }

    if (status === 403 && error.response.data) {
      return Promise.reject(error.response.data);
    }

    return Promise.reject(error);
  }
);
