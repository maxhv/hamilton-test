import axios from "axios";
import {API_KEY} from "../../../api";

export const fetchSeries = (url: string) => axios({
  method: 'get',
  url,
  params: {
    "apikey": API_KEY,
    "ts": Date.now(),
  }
});

export const fetchAllSeries = (urls: Array<string>) => Promise.all(urls.map(fetchSeries));
