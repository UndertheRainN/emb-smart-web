import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import i18next from "i18next";
import { HttpOptions, HttpResponse } from "./http";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: Number(import.meta.env.VITE_API_TIME_OUT) || 1000,
});

instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  let { headers } = config;
  //   headers = {
  //     ...headers,
  //     "Accept-Language":i18next.language
  //   }
  headers.set("Accept-Language", i18next.language);
  headers.set("Accept-Control-Allow-Origin", "*");
  const accessToken = getAccessToken();
  if (accessToken) {
    headers.setAuthorization(`Bearer ${accessToken}`);
  }
  return { ...config, headers };
});

export const getAccessToken = () => {
  const token: { accessToken: string } | null = JSON.parse(
    localStorage.getItem("TOKEN") || "null"
  );
  return token?.accessToken || "";
};

export const httpClient = async <T>({
  data,
  headers,
  method = "post",
  params,
  endPoint,
  signal,
}: HttpOptions): Promise<HttpResponse<T>> => {
  try {
    const response: AxiosResponse<HttpResponse<T>> = await instance({
      url: endPoint,
      params,
      method,
      headers,
      data,
      signal,
    });
    const _data = response.data;
    if (_data.info.code !== 200) {
      return Promise.reject(_data.info);
    }
    return Promise.resolve(_data);
  } catch (error: any) {
    const { response } = error;
    return Promise.reject(response.data.info);
  }
};

export const postClient = <T>(
  options: HttpOptions
): Promise<HttpResponse<T>> => {
  return httpClient<T>({ ...options, method: "post" });
};

export const getClient = <T>(
  options: HttpOptions
): Promise<HttpResponse<T>> => {
  return httpClient<T>({ ...options, method: "get" });
};

export const deleteClient = <T>(
  options: HttpOptions
): Promise<HttpResponse<T>> => {
  return httpClient<T>({ ...options, method: "delete" });
};
export const putClient = <T>(
  options: HttpOptions
): Promise<HttpResponse<T>> => {
  return httpClient<T>({ ...options, method: "put" });
};
