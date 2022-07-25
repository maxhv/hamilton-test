import {ColumnsType, TablePaginationConfig} from "antd/es/table";

export interface Props {
  rowKey: string,
  dataSource: Array<any>,
  onClick?: Function,
  onPageChange: Function,
  pagination?: false | TablePaginationConfig | undefined,
  loading?: boolean,
}
