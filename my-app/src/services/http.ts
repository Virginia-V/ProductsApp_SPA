import axios, { AxiosResponse } from "axios";
import { ApiResponse } from "../models/apiResponse";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

async function get<Result>(path: string): Promise<Result> {
  return execute(() => axios.get(path));
}

async function post<Result>(path: string, body?: any): Promise<Result> {
  return execute(() => axios.post(path, body));
}

async function execute<TResult>(request: () => Promise<AxiosResponse<any>>) {
  try {
    const { data } = await request();
    const apiResponse = data as ApiResponse<TResult>;
    if (apiResponse.succeeded) return Promise.resolve(apiResponse.result);
    return Promise.reject({ apiRequestFailed: true });
  } catch (error) {
    return Promise.reject(error);
  }
}

const httpMethods = {
  get,
  post,
};

export default httpMethods;
