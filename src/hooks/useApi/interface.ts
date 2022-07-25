export interface Props {
  setHeroes: Function,
  isError: boolean,
  setError: Function,
  setTotal: Function,
}

export interface Fetch {
  searchName: string,
  limit: number,
  offset: number,
}
