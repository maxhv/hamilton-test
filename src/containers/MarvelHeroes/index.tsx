import {useEffect, useState, useCallback} from 'react';
import {TablePaginationConfig} from "antd/es/table";
import debounce from 'lodash/debounce';
import isEmpty from 'lodash/isEmpty';

import {Table} from '../../components/table';
import {Retry} from '../../components/retry';
import {Modal} from '../../components/modal';
import {Spinner} from '../../components/spinner';
import {Search} from '../../components/search';
import {useApi} from '../../hooks/useApi';
import {DEFAULT_PAGE_SIZE, DEFAULT_LIMIT, DEBOUNCE_TIME} from './constants';
import {Character} from '../../interfaces/character';
import {HeroDetails} from '../HeroDetails';

export const MarvelHeroes = () => {
  const [heroes, setHeroes] = useState([]);
  const [currentHero, setCurrentHero] = useState<Character>({});
  const [searchValue, setSearchedValue] = useState('');
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    pageSize: DEFAULT_PAGE_SIZE,
    current: 1,
  });
  const [isError, setError] = useState(false);
  const [total, setTotal] = useState<number>(0);

  const [isLoading, fetchData] = useApi({ setHeroes, isError, setError, setTotal });

  useEffect(() => {
    fetchData({ limit: DEFAULT_LIMIT, offset: 0 });
  }, []);

  useEffect(() => {
    setPagination({...pagination, total});
  }, [total]);

  const onPageChange = useCallback((page: number) => {
    setPagination({
      ...pagination,
      current: page,
      total,
    });
    handleFetch(page);
  }, [pagination]);

  const handleFetch = (page: number = 0) => {
    fetchData({searchName: searchValue, limit: pagination.pageSize, offset: (pagination.pageSize || DEFAULT_PAGE_SIZE) * ((page || pagination.current || 1) - 1)});
  }

  const handleSearch = useCallback((event: any) => {
    const name = event?.target?.value;

    if (name === searchValue) return;

    setSearchedValue(name);
    setPagination({...pagination, current: 1});

    fetchData({searchName: name, limit: pagination.pageSize, offset: 0});
  }, [searchValue]);

  const handleDebouncedSearch = debounce(handleSearch, DEBOUNCE_TIME);

  const handleClickHero = (hero: Character) => {
    setCurrentHero(hero);
  }

  const handleHeroClose = () => {
    setCurrentHero({});
  }

  return (
    <>
      <Spinner isShown={isLoading} />
      <Search onSearch={handleDebouncedSearch} />
      <Table
        rowKey="marvel-row"
        dataSource={heroes}
        pagination={pagination}
        onPageChange={onPageChange}
        onClick={handleClickHero}
      />
      <Modal
        title={currentHero?.name}
        isOpened={!isEmpty(currentHero)}
        onClose={handleHeroClose}
      >
        <HeroDetails hero={currentHero} onClose={handleHeroClose} />
      </Modal>
      <Modal
        title="Loading data error"
        isOpened={isError}
      >
        <Retry onClick={() => handleFetch(pagination.current)} />
      </Modal>
    </>
  )
}
