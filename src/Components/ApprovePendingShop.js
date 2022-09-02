import { Button, Table, Typography } from "antd";
import { React, useState } from "react";
import UserDetail from "./ChildPages/UserDetail";

let { Title } = Typography;
const data = [
  {
    id: 1,
    name: "Amazon",
    shopId: "05364314752",
    email: "amazon458@gmail.com",
    status: "Pending",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
    button: (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button type="primary" shape="round" size="Small">
          Accept
        </Button>
        <Button type="danger" shape="round" size="Small">
          Reject
        </Button>
      </div>
    ),
  },
  {
    id: 2,
    name: "BSRM",
    shopId: "05388304752",
    email: "amazon458@gmail.com",
    status: "Pending",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
    button: (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button type="primary" shape="round" size="Small">
          Accept
        </Button>
        <Button type="danger" shape="round" size="Small">
          Reject
        </Button>
      </div>
    ),
  },
  {
    id: 3,
    name: "Silicon ",
    shopId: "05364317510",
    email: "amazon458@gmail.com",
    status: "Pending",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
    button: (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button type="primary" shape="round" size="Small">
          Accept
        </Button>
        <Button type="danger" shape="round" size="Small">
          Reject
        </Button>
      </div>
    ),
  },
  {
    id: 4,
    name: "Jack Shop",
    shopId: "05364313302",
    email: "amazon458@gmail.com",
    status: "Pending",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
    button: (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button type="primary" shape="round" size="Small">
          Accept
        </Button>
        <Button type="danger" shape="round" size="Small">
          Reject
        </Button>
      </div>
    ),
  },
  {
    id: 5,
    name: "Car House",
    shopId: "05364311073",
    email: "amazon458@gmail.com",
    status: "Pending",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
    button: (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button type="primary" shape="round" size="Small">
          Accept
        </Button>
        <Button type="danger" shape="round" size="Small">
          Reject
        </Button>
      </div>
    ),
  },
  {
    id: 6,
    name: "Movie Ghar",
    shopId: "05364310036",
    email: "amazon458@gmail.com",
    status: "Pending",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
    button: (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button type="primary" shape="round" size="Small">
          Accept
        </Button>
        <Button type="danger" shape="round" size="Small">
          Reject
        </Button>
      </div>
    ),
  },
  {
    id: 7,
    name: "Nylon Sher",
    shopId: "05510014752",
    email: "amazon458@gmail.com",
    status: "Pending",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
    button: (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button type="primary" shape="round" size="Small">
          Accept
        </Button>
        <Button type="danger" shape="round" size="Small">
          Reject
        </Button>
      </div>
    ),
  },
  {
    id: 8,
    name: "Rafid Milon Store",
    shopId: "05364310000",
    email: "amazon458@gmail.com",
    status: "Pending",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
    button: (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button type="primary" shape="round" size="Small">
          Accept
        </Button>
        <Button type="danger" shape="round" size="Small">
          Reject
        </Button>
      </div>
    ),
  },
  {
    id: 9,
    name: "Tesla",
    shopId: "05336454752",
    email: "amazon458@gmail.com",
    status: "Pending",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
    button: (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button type="primary" shape="round" size="Small">
          Accept
        </Button>
        <Button type="danger" shape="round" size="Small">
          Reject
        </Button>
      </div>
    ),
  },
  {
    id: 10,
    name: "Facebook",
    shopId: "07823314752",
    email: "amazon458@gmail.com",
    status: "Pending",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
    button: (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button type="primary" shape="round" size="Small">
          Accept
        </Button>
        <Button type="danger" shape="round" size="Small">
          Reject
        </Button>
      </div>
    ),
  },
  {
    id: 11,
    name: "RabRab Book House",
    shopId: "05136437492",
    email: "amazon458@gmail.com",
    status: "Pending",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
    button: (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button type="primary" shape="round" size="Small">
          Accept
        </Button>
        <Button type="danger" shape="round" size="Small">
          Reject
        </Button>
      </div>
    ),
  },
  {
    id: 12,
    name: "Rainbow Street",
    shopId: "05364951352",
    email: "amazon458@gmail.com",
    status: "Pending",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
    button: (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button type="primary" shape="round" size="Small">
          Accept
        </Button>
        <Button type="danger" shape="round" size="Small">
          Reject
        </Button>
      </div>
    ),
  },
  {
    id: 13,
    name: "Food Ala",
    shopId: "05364311032",
    email: "amazon458@gmail.com",
    status: "Pending",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
    button: (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button type="primary" shape="round" size="Small">
          Accept
        </Button>
        <Button type="danger" shape="round" size="Small">
          Reject
        </Button>
      </div>
    ),
  },
  {
    id: 14,
    name: "Nikon",
    shopId: "05396574752",
    email: "amazon458@gmail.com",
    status: "Pending",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
    button: (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button type="primary" shape="round" size="Small">
          Accept
        </Button>
        <Button type="danger" shape="round" size="Small">
          Reject
        </Button>
      </div>
    ),
  },
  {
    id: 15,
    name: "Alibaba",
    shopId: "05363020752",
    email: "amazon458@gmail.com",
    status: "Pending",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
    button: (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button type="primary" shape="round" size="Small">
          Accept
        </Button>
        <Button type="danger" shape="round" size="Small">
          Reject
        </Button>
      </div>
    ),
  },
  {
    id: 16,
    name: "Daraz",
    shopId: "05963514752",
    email: "amazon458@gmail.com",
    status: "Pending",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
    button: (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button type="primary" shape="round" size="Small">
          Accept
        </Button>
        <Button type="danger" shape="round" size="Small">
          Reject
        </Button>
      </div>
    ),
  },
  {
    id: 17,
    name: "Bikroy",
    shopId: "11544314752",
    email: "amazon458@gmail.com",
    status: "Pending",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
    button: (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button type="primary" shape="round" size="Small">
          Accept
        </Button>
        <Button type="danger" shape="round" size="Small">
          Reject
        </Button>
      </div>
    ),
  },
  {
    id: 18,
    name: "Coffee House",
    shopId: "05364319562",
    email: "amazon458@gmail.com",
    status: "Pending",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
    button: (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button type="primary" shape="round" size="Small">
          Accept
        </Button>
        <Button type="danger" shape="round" size="Small">
          Reject
        </Button>
      </div>
    ),
  },
  {
    id: 19,
    name: "Light House",
    shopId: "05399664752",
    email: "amazon458@gmail.com",
    status: "Pending",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
    button: (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button type="primary" shape="round" size="Small">
          Accept
        </Button>
        <Button type="danger" shape="round" size="Small">
          Reject
        </Button>
      </div>
    ),
  },
  {
    id: 20,
    name: "Raisul Estarn",
    shopId: "05396514752",
    email: "amazon458@gmail.com",
    status: "Pending",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
    button: (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button type="primary" shape="round" size="Small">
          Accept
        </Button>
        <Button type="danger" shape="round" size="Small">
          Reject
        </Button>
      </div>
    ),
  },
  {
    id: 21,
    name: "Lack House",
    shopId: "05364314555",
    email: "amazon458@gmail.com",
    status: "Pending",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
    button: (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button type="primary" shape="round" size="Small">
          Accept
        </Button>
        <Button type="danger" shape="round" size="Small">
          Reject
        </Button>
      </div>
    ),
  },
  {
    id: 22,
    name: "Aman Velly",
    shopId: "05364314784",
    email: "amazon458@gmail.com",
    status: "Pending",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
    button: (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button type="primary" shape="round" size="Small">
          Accept
        </Button>
        <Button type="danger" shape="round" size="Small">
          Reject
        </Button>
      </div>
    ),
  },
  {
    id: 23,
    name: "Ahad Mir Reja",
    shopId: "05364314924",
    email: "amazon458@gmail.com",
    status: "Pending",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
    button: (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button type="primary" shape="round" size="Small">
          Accept
        </Button>
        <Button type="danger" shape="round" size="Small">
          Reject
        </Button>
      </div>
    ),
  },
  {
    id: 24,
    name: "Akheri Barta",
    shopId: "05364315423",
    email: "amazon458@gmail.com",
    status: "Pending",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
    button: (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button type="primary" shape="round" size="Small">
          Accept
        </Button>
        <Button type="danger" shape="round" size="Small">
          Reject
        </Button>
      </div>
    ),
  },
];

const columns = [
  {
    key: "shopId",
    title: "ID",
    dataIndex: "id",
  },
  {
    key: "shopId",
    title: "NAME",
    dataIndex: "name",
  },
  {
    key: "shopId",
    title: "Shop ID",
    dataIndex: "shopId",
  },
  {
    key: "shopId",
    title: "EMAIL",
    dataIndex: "email",
  },
  {
    key: "shopId",
    title: "Status",
    dataIndex: "status",
  },
  {
    key: "shopId",
    title: "Details",
    dataIndex: "details",
  },
  {
    key: "shopId",
    title: "Action",
    dataIndex: "button",
  },
];

export default function ApprovePendingShop() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  return (
    <>
      <Title
        style={{
          background: "#D8D7E9",
          alignItems: "center",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          padding: 10,
          borderRadius: 12,
        }}
      >
        Pending Shops
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
