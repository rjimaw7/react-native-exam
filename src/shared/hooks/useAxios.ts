import axios, { AxiosResponse } from 'axios';
import { CONFIG } from 'shared/config/config';
import { IAxios } from 'shared/interfaces/IAxios';

export const useAxios = () => {
  const instance = axios.create({
    baseURL: CONFIG.API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const GET = async <R, P = unknown, B = unknown>(args: IAxios<P, B>): Promise<AxiosResponse<R>> => {
    // console.log('args', args);

    return instance({
      ...args,
      method: 'GET',
    });
  };

  return {
    GET,
    instance,
  };
};
