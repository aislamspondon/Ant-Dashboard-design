import { Button, message, Typography } from "antd";
import axios from "axios";
import { React, useEffect, useState } from "react";
import PendingShopDetails from "./ChildPages/PendingShopDetails";
import TableData from "./TableData/TableData";
let { Title } = Typography;

export default function ApprovePendingShop() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [shops, setShops] = useState();

  const columsNew = [
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
    {
      title: "Accept",
      dataIndex: "accept",
      key: "accept",
    },
    {
      title: "Reject",
      dataIndex: "reject",
      key: "reject",
    },
  ];
  const UpdateShop = async (e, shopId, status) => {
    message.success(shopId, "updated");
  };
  const getShops = async () => {
    if (typeof window !== undefined) {
      const shops = await axios.get(
        "https://merchport.z1p.xyz/api/_shops/pending-approval"
      );
      const allShops = shops.data.result;
      console.log("This is all", allShops);
      allShops.forEach((shop) => {
        shop["details"] = (
          <Button>
            <PendingShopDetails
              style={{ height: "20px", width: "20px" }}
              pendingShopDetailsList={shop}
            />
          </Button>
        );
        shop["accept"] = (
          <Button
            type="primary"
            onClick={(e) => UpdateShop(e, shop.id, "accept")}
            shape="round"
            size="Small"
          >
            Accept
          </Button>
        );
        shop["reject"] = (
          <Button
            type="danger"
            onClick={(e) => UpdateShop(e, shop.id, "reject")}
            shape="round"
            size="Small"
          >
            Reject
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
      {/* <Table
        dataSource={shops}
        columns={columsNew}
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
        columns={columsNew}
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
