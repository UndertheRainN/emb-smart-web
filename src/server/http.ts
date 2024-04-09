import {
  AxiosHeaders,
  GenericAbortSignal,
  HttpStatusCode,
  Method,
} from "axios";

export interface HttpOptions {
  method?: Method;
  data?: any;
  params?: any;
  headers?: AxiosHeaders;
  endPoint: string;
  signal?: GenericAbortSignal;
}

export interface HttpResponse<T> {
  data: T | null;
  info: {
    code: HttpStatusCode;
    message: string;
  };
}
