import axios from 'axios';
import {useState, useRef} from "react";
import isEqual from 'lodash/isEqual';

import {MARVEL_CHARACTERS_API, API_KEY} from '../../api';
import {Props, Fetch} from './interface';
import {savePreviousValues} from './utils';

export const useApi = ({ setHeroes, isError, setError, setTotal}: Props) : [boolean, Function] => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const params = useRef({ searchName: '', limit: 0, offset: 0 });

  const fetchData = async ({ searchName, limit, offset }: Fetch) => {
    if (isEqual(params.current, {searchName, limit, offset }) && !isError) return;

    savePreviousValues(params, {searchName, limit, offset });

    setLoading(true);

    try {
      const response = await axios({
        method: 'get',
        url: MARVEL_CHARACTERS_API,
        params: {
          nameStartsWith: searchName || null,
          offset,
          limit,
          "apikey": API_KEY,
          "ts": Date.now(),
        }
      });
      const { data: responseData } = response.data;
      const { total } = responseData;

      setTotal(total);
      setHeroes([...responseData.results]);
      setError(false);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return [isLoading, fetchData];
}
