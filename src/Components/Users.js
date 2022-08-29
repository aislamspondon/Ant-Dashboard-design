import { StopOutlined } from "@ant-design/icons";
import { Button, Table, Typography } from "antd";
import { React, useState } from "react";

let { Title } = Typography;
const data = [
  {
    id: 1,
    name: "Don",
    username: "don123",
    email: "don458@gmail.com",
    activity: "Active",
    button: (
      <Button type="danger" icon={<StopOutlined />}>
        Suspend/Restrict
      </Button>
    ),
    key: 1,
  },
  {
    id: 2,
    name: "John",
    username: "john123",
    email: "john458@gmail.com",
    activity: "Active",
    button: (
      <Button type="danger" icon={<StopOutlined />}>
        Suspend/Restrict
      </Button>
    ),
    key: 2,
  },
  {
    id: 3,
    name: "Alom",
    username: "alom123",
    email: "alom458@gmail.com",
    activity: "Active",
    button: (
      <Button type="danger" icon={<StopOutlined />}>
        Suspend/Restrict
      </Button>
    ),
    key: 3,
  },
  {
    id: 4,
    name: "Alvi",
    username: "alvi123",
    email: "alvi458@gmail.com",
    activity: "Inactive",
    button: (
      <Button type="danger" icon={<StopOutlined />}>
        Suspend/Restrict
      </Button>
    ),
    key: 4,
  },
  {
    id: 5,
    name: "Feigh",
    username: "feigh123",
    email: "feigh458@gmail.com",
    activity: "Active",
    button: (
      <Button type="danger" icon={<StopOutlined />}>
        Suspend/Restrict
      </Button>
    ),
    key: 5,
  },
  {
    id: 6,
    name: "Aloha",
    username: "aloha123",
    email: "aloha458@gmail.com",
    activity: "Inactive",
    button: (
      <Button type="danger" icon={<StopOutlined />}>
        Suspend/Restrict
      </Button>
    ),
    key: 6,
  },
  {
    id: 7,
    name: "Axie",
    username: "axie123",
    email: "axie458@gmail.com",
    activity: "Active",
    button: (
      <Button type="danger" icon={<StopOutlined />}>
        Suspend/Restrict
      </Button>
    ),
    key: 7,
  },
  {
    id: 8,
    name: "Darcy",
    username: "darcy123",
    email: "darcy458@gmail.com",
    activity: "Inactive",
    button: (
      <Button type="danger" icon={<StopOutlined />}>
        Suspend/Restrict
      </Button>
    ),
    key: 8,
  },
  {
    id: 9,
    name: "Eaglan",
    username: "eaglan123",
    email: "eaglan458@gmail.com",
    activity: "Active",
    button: (
      <Button type="danger" icon={<StopOutlined />}>
        Suspend/Restrict
      </Button>
    ),
    key: 9,
  },
  {
    id: 10,
    name: "Flakon",
    username: "flakon123",
    email: "flakon458@gmail.com",
    activity: "Inactive",
    button: (
      <Button type="danger" icon={<StopOutlined />}>
        Suspend/Restrict
      </Button>
    ),
    key: 10,
  },
];

const columns = [
  {
    title: "NO",
    dataIndex: "id",
    key: "key",
  },
  {
    title: "NAME",
    dataIndex: "name",
    key: "key",
  },
  {
    title: "USERNAME",
    dataIndex: "username",
    key: "key",
  },
  {
    title: "EMAIL",
    dataIndex: "email",
    key: "key",
  },
  {
    title: "Status",
    dataIndex: "activity",
    key: "key",
    render: (activity) => {
      if (activity === "Active") {
        return (
          <span
            style={{
              // background: "rgba(212, 167, 31, 0.3)",
              color: "#18f75b",
              fontWeight: "bold",
              padding: 3,
              paddingLeft: 10,
              paddingRight: 10,
              borderRadius: 12,
            }}
          >
            {activity}
          </span>
        );
      } else {
        return (
          <span
            style={{
              // background: "rgba(220, 53, 69, 0.2",

              fontWeight: "bold",
              color: "#DC3545",
              padding: 3,
              paddingLeft: 10,
              paddingRight: 10,
              borderRadius: 12,
            }}
          >
            {activity}
          </span>
        );
      }
    },
    filters: [
      { text: "Active", value: "Active" },
      { text: "Inactive", value: "Inactive" },
    ],
    onFilter: (value, record) => {
      return record.activity === value;
    },
  },
  {
    title: "ACTION",
    dataIndex: "button",
    key: "key",
  },
];

export default function Users() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  return (
    <>
      <Title
        style={{
          background: "#E9D7D7",
          alignItems: "center",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          padding: 10,
          borderRadius: 12,
        }}
      >
        Users
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
