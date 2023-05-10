import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  counts: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "017396d7564f4e3ab3c444f29b18189d",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  get = (id: number) =>
    axiosInstance.get<T>(`${this.endpoint}/${id}`).then((res) => res.data);
}

export default APIClient;
