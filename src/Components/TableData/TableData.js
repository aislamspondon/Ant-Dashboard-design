import { Table } from "antd";
import React, { useState } from 'react';

const TableData = ({data, column}) => { 
    console.log("tableData", data);
    const [searchText, setSearchText] = useState("");   
  return (
    <Table
    dataSource={data}
    // dataSource={data.filter((val) => {
    //   if (searchText === "") {
    //     return val;
    //   } else if (
    //     val.name.toLowerCase().includes(searchText.toLowerCase())
    //   ) {
    //     return val;
    //   }
    // })}
    columns={column}
    // pagination={{
    //   current: page,
    //   pageSize: pageSize,
    //   onChange: (page, pageSize) => {
    //     setPage(page);
    //     setPageSize(pageSize);
    //   },
    // }}
  ></Table>
  )
}

export default TableData