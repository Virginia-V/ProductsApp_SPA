import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

async function get<Result>(path: string): Promise<Result> {
  return await axios.get(path);
}

async function post<Result>(path: string, body?: any): Promise<Result> {
  return await axios.post(path, body);
}

const httpMethods = {
  get,
  post,
};

export default httpMethods;
