import React from 'react';
import { Input } from 'antd';
import {Props} from "./interface";

export const Search = ({onSearch}:Props) => (
  <div className="search-input">
    <Input placeholder="Search a character" onChange={onSearch} allowClear />
  </div>
);

