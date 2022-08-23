import { Table, Typography } from "antd";
import { React, useState } from "react";
let { Title } = Typography;

const data = [
  {
    id: 1,
    activity: "Log In",
    description: "Log in from mozila firefox",
    msg: "User 'ADMIN1' (from GUI(192.168.1.110)) lock adom (root) success",
  },
];
const columns = [
  {
    title: "NO",
    dataIndex: "id",
    key: "key",
  },
  {
    title: "Activity",
    dataIndex: "activity",
    key: "key",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "key",
  },
  {
    title: "Message",
    dataIndex: "msg",
    key: "key",
  },
];
export default function AdminLogs() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  return (
    <>
      <Title
        style={{
          background: "#99FC77",
          alignItems: "center",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          padding: 10,
          borderRadius: 12,
        }}
      >
        User Manager Logs
      </Title>
      <Table
        dataSource={data}
        columns={columns}
        pagination={{
          current: page,
          pageSize: pageSize,
          onChange: (page, pageSize) => {
            setPage(page);
            setPageSize(pageSize);
          },
        }}
      ></Table>
    </>
  );
}
