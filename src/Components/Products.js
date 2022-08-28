import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Divider, Image, Input, Table, Typography } from "antd";
import React, { useState } from "react";
let { Title } = Typography;
let img_use = "";
const data = [];
let status_call = "PROCESSED";
for (let i = 1; i < 1006; i++) {
  if (i % 2 === 0) {
    status_call = "ON HOLD";
    img_use =
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dessert-main-image-molten-cake-0fbd4f2.jpg";
  } else {
    status_call = "PROCESSED";
    img_use =
      "https://www.mashed.com/img/gallery/insanely-delicious-desserts-you-need-to-try-before-you-die/intro-1605294330.jpg";
  }
  data.push({
    key: i,
    img: <Image width={120} height={85} src={img_use} />,
    p_name: `Chocolate ${i}`,
    p_category: "desserts",
    update_date: `${i}1/2/2022`,
    status: status_call,
    edit: (
      <Button>
        <EditOutlined />
      </Button>
    ),
    comment: <Button>Comment</Button>,
    delete: (
      <Button type="danger">
        <DeleteOutlined />
      </Button>
    ),
  });
}
const columns = [
  {
    title: "",
    dataIndex: "img",
    key: "key",
  },
  {
    title: "",
    dataIndex: "p_name",
    key: "key",
  },
  {
    title: "",
    dataIndex: "p_category",
    key: "key",
  },
  {
    title: "",
    dataIndex: "update_date",
    key: "key",
  },
  {
    title: "",
    dataIndex: "status",
    key: "key",
    render: (record) => {
      if (record === "PROCESSED") {
        return (
          <span
            style={{
              background: "#4556AC",
              color: "#fff",
              padding: 3,
              paddingLeft: 10,
              paddingRight: 10,
              borderRadius: 12,
            }}
          >
            {record}
          </span>
        );
      } else {
        return (
          <span
            style={{
              background: "#922C88",
              color: "#fff",
              padding: 3,
              paddingLeft: 10,
              paddingRight: 10,
              borderRadius: 12,
            }}
          >
            {record}
          </span>
        );
      }
    },
    filters: [
      { text: "PROCESSED", value: "PROCESSED" },
      { text: "ON HOLD", value: "ON HOLD" },
    ],
    onFilter: (value, record) => {
      return record.activity === value;
    },
  },
  {
    title: "",
    dataIndex: "edit",
    key: "key",
  },
  {
    title: "",
    dataIndex: "comment",
    key: "key",
  },
  {
    title: "",
    dataIndex: "delete",
    key: "key",
  },
];

export default function Products() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchText, setSearchText] = useState("");
  const SearchProductButton = (e) => {
    setSearchText(e.target.value);
  };

  const start = () => {
    setLoading(true); // ajax request after empty completing

    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
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
        Products
      </Title>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Input
          placeholder="Search For Find Shop"
          prefix={<SearchOutlined />}
          style={{
            width: 400,
            height: 50,
            marginBottom: 20,
            paddingLeft: 30,
            fontSize: 16,
            borderRadius: 12,
          }}
          onChange={SearchProductButton}
          allowClear
          value={searchText}
        />
        <Button type="primary" shape="round" style={{ width: 200, height: 50 }}>
          Add New
        </Button>
      </div>

      <Divider />

      <div
        style={{
          marginBottom: 16,
        }}
      >
        <Button
          type="primary"
          onClick={start}
          disabled={!hasSelected}
          loading={loading}
        >
          Reload
        </Button>
        <span
          style={{
            marginLeft: 8,
          }}
        >
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
        </span>
      </div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data.filter((val) => {
          if (searchText === "") {
            return val;
          } else if (
            val.p_name.toLowerCase().includes(searchText.toLowerCase())
          ) {
            return val;
          }
        })}
        pagination={{
          current: page,
          pageSize: pageSize,
          onChange: (page, pageSize) => {
            setPage(page);
            setPageSize(pageSize);
          },
        }}
      />
    </>
  );
}
