import { SelectOutlined } from "@ant-design/icons";
import { message, Popconfirm } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ShopDetailsHere from "./ShopDetailsHere";

export default function ShopDetails({ shopDetailsList }) {
  const shopDetails = shopDetailsList;
  const [shop, setShop] = useState();
  const getShopInfo = async () => {
    if (typeof windows !== undefined) {
      const shop = await axios.get(
        `https://merchport.z1p.xyz/api/shops/${shopDetails.id}`
      );

      setShop(shop.data);
    }
  };
  useEffect(() => {
    getShopInfo();
  },[]);

  console.log("This is ", shopDetails);

  function confirm(e) {
    console.log(e);
    message.success("Click on Yes");
  }

  function cancel(e) {
    console.log(e);
    message.error("Click on Back");
  }
  console.log("This is Shop Details : ", shop);
  return (
    <>
      <Popconfirm
        placement="topLeft"
        title={<ShopDetailsHere data={shop} />}
        onConfirm={confirm}
        onCancel={cancel}
        okText="Update"
        cancelText="X"
      >
        <a href="/">
          <SelectOutlined />
        </a>
      </Popconfirm>
    </>
  );
}
