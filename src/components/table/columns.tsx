import {ColumnsType} from "antd/es/table";

import {Character} from '../../interfaces/character';

export const columnsUser: ColumnsType<Character> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    filtered: true,
    // @ts-ignore
    sorter: (a, b) => {
      // @ts-ignore
      return a.name >= b.name},
    defaultSortOrder: "ascend",
  },
  {
    title: 'Stories',
    dataIndex: 'stories',
    key: 'stories.available',
    align: 'center',
    render: (events) => events.available,
    sorter: (a, b) => { // @ts-ignore
      return a.stories.available - b.stories.available},
  },
  {
    title: 'Events',
    dataIndex: 'events',
    key: 'events',
    align: 'center',
    render: (events) => events.available,
    sorter: (a, b) => { // @ts-ignore
      return a.events.available - b.events.available},
  },
  {
    title: 'Series',
    dataIndex: 'series',
    key: 'series',
    align: 'center',
    render: (events) => events.available,
    sorter: (a, b) => { // @ts-ignore
      return a.series.available - b.series.available},
  },
  {
    title: 'Comics',
    dataIndex: 'comics',
    key: 'comics',
    align: 'center',
    render: (events) => events.available,
    sorter: (a, b) => { // @ts-ignore
      return a.events.available - b.events.available},
  },
];

