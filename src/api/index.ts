import axios from 'axios';
import {key} from 'src/config';
type Method = 'get' | 'post' | 'delete' | 'put';

const url = `http://swopenAPI.seoul.go.kr/api/subway/${key}/json/nearBy/0/1`;

export async function request<T>(method: Method, url: string, params?: any) {
  const response = await axios.request({url, method, params});
  return response;
}

export const getNearStation = async (x: number, y: number) => {
  return await request('get', `${url}/${x}/${y}`);
};
