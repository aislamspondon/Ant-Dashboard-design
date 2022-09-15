import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Typography } from "antd";
import axios from "axios";
import { React, useEffect, useState } from "react";
import ShopDetails from "./ChildPages/ShopDetails";
import TableData from "./TableData/TableData";
let { Title } = Typography;

export default function FindShop() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchText, setSearchText] = useState("");
  const [shops, setShops] = useState();
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const columsNew = [
    {
      title: "logo",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Shop ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Foundation date",
      dataIndex: "foundDate",
      key: "foundDate",
    },
    {
      title: "Details",
      dataIndex: "details",
      key: "key",
    },
  ];

  const getShops = async () => {
    if (typeof window !== undefined) {
      const shops = await axios.get("https://merchport.z1p.xyz/api/shops");
      const allShops = shops.data.result;
      allShops.forEach((shop) => {
        shop["details"] = (
          <Button>
            <ShopDetails
              style={{ height: "20px", width: "20px" }}
              shopDetailsList={shop}
            />
          </Button>
        );
      });

      setShops(shops.data.result);
    }
  };
  useEffect(() => {
    getShops();
  }, []);

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
        All Shops List
      </Title>
      <Input
        placeholder="Search For Find Shop"
        prefix={<SearchOutlined />}
        style={{
          width: 400,
          height: 50,
          marginBottom: 20,
          paddingLeft: 30,
          fontSize: 16,
        }}
        onChange={handleChange}
        allowClear
        value={searchText}
      />

      {/* <Table
        dataSource={data.filter((val) => {
          if (searchText === "") {
            return val;
          } else if (
            val.name.toLowerCase().includes(searchText.toLowerCase())
          ) {
            return val;
          }
        })}
        columns={columns}
        pagination={{
          current: page,
          pageSize: pageSize,
          onChange: (page, pageSize) => {
            setPage(page);
            setPageSize(pageSize);
          },
        }}
      ></Table> */}
      <TableData
        data={shops}
        column={columsNew}
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
