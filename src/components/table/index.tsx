import React from "react";
import { Table as AntdTable } from 'antd';
import { Props } from './interface';
import {columnsUser} from './columns';
import 'antd/dist/antd.dark.min.css';

export const Table =  ({ dataSource, loading, pagination, onClick, onPageChange }: Props) => {
  return (
    <>
      <AntdTable
        columns={columnsUser}
        dataSource={dataSource}
        pagination={{...pagination, showSizeChanger: false, onChange: (page) => onPageChange(page), position: ['bottomCenter']}}
        loading={loading}
        scroll={{ y: 'calc(100vh - 250px)' }}
        bordered
        onRow={(hero) => ({
          onClick: () => { if (onClick) onClick(hero)}
        })}
      />
    </>
  );
}
