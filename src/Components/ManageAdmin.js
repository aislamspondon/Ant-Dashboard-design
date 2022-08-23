import { Button, Table, Typography } from "antd";
import { React, useState } from "react";
let { Title } = Typography;

const data = [
  {
    id: 1,
    name: "Don",
    username: "don123",
    email: "don458@gmail.com",
    password: "***********",
    button: (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button type="primary" shape="round" size="Small">
          Edit
        </Button>
        <Button type="danger" shape="round" size="Small">
          Delete
        </Button>
      </div>
    ),
    key: 1,
  },
  {
    id: 2,
    name: "John",
    username: "john123",
    email: "john458@gmail.com",
    password: "***********",
    button: (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button type="primary" shape="round" size="Small">
          Edit
        </Button>
        <Button type="danger" shape="round" size="Small">
          Delete
        </Button>
      </div>
    ),
    key: 2,
  },
  {
    id: 3,
    name: "Alom",
    username: "alom123",
    email: "alom458@gmail.com",
    password: "***********",
    button: (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button type="primary" shape="round" size="Small">
          Edit
        </Button>
        <Button type="danger" shape="round" size="Small">
          Delete
        </Button>
      </div>
    ),
    key: 3,
  },
  {
    id: 4,
    name: "Alvi",
    username: "alvi123",
    email: "alvi458@gmail.com",
    password: "***********",
    button: (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button type="primary" shape="round" size="Small">
          Edit
        </Button>
        <Button type="danger" shape="round" size="Small">
          Delete
        </Button>
      </div>
    ),
    key: 4,
  },
  {
    id: 5,
    name: "Feigh",
    username: "feigh123",
    email: "feigh458@gmail.com",
    password: "***********",
    button: (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button type="primary" shape="round" size="Small">
          Edit
        </Button>
        <Button type="danger" shape="round" size="Small">
          Delete
        </Button>
      </div>
    ),
    key: 5,
  },
  {
    id: 6,
    name: "Aloha",
    username: "aloha123",
    email: "aloha458@gmail.com",
    password: "***********",
    button: (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button type="primary" shape="round" size="Small">
          Edit
        </Button>
        <Button type="danger" shape="round" size="Small">
          Delete
        </Button>
      </div>
    ),
    key: 6,
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
    title: "PASSWORD",
    dataIndex: "password",
    key: "key",
  },
  {
    title: "ACTION",
    dataIndex: "button",
    key: "key",
  },
];

export default function ManageAdmin() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  return (
    <>
      <Title
        style={{
          background: "#ACF4DA",
          alignItems: "center",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          padding: 10,
          borderRadius: 12,
        }}
      >
        User Manager
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
