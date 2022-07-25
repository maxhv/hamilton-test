export const savePreviousValues  = (params: { current: { searchName: any; limit: any; offset: any; }; }, {
  searchName,
  limit,
  offset
}: any) => {
  params.current.searchName = searchName;
  params.current.limit = limit;
  params.current.offset = offset;
}
