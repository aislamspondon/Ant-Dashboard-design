import { DeleteOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Divider, Input, Popover, Typography } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import EditProduct from "./ChildPages/EditProduct";
import TableData from "./TableData/TableData";

let { Title } = Typography;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
  },
  {
    title: "Edit",
    dataIndex: "edit",
    key: "edit",
  },
  {
    title: "Delete",
    dataIndex: "delete",
    key: "delete",
  },
];

export default function Products() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchText, setSearchText] = useState("");
  const [product, setProduct] = useState();
  const SearchProductButton = (e) => {
    setSearchText(e.target.value);
  };

  const getUsers = async () => {
    if (typeof windows !== undefined) {
      const tempArray = [];
      const products = await axios.get(
        "https://merchport.z1p.xyz/api/_products"
      );
      console.log(products.data.result);
      const allProducts = products.data.result;
      allProducts.forEach((product) => {
        product["delete"] = (
          <Button type="danger">
            <DeleteOutlined />
          </Button>
        );
        product["edit"] = (
          <Popover placement="bottom" trigger="click">
            <Button>
              <EditProduct />
            </Button>
          </Popover>
        );
      });

      setProduct(allProducts);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

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
        <a href="/addproduct">
          <Button
            type="primary"
            shape="round"
            style={{ width: 200, height: 50 }}
          >
            Add New
          </Button>
        </a>
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
      {/* <Table
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
      /> */}
      <TableData
        data={product}
        column={columns}
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
