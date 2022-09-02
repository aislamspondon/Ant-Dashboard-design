import { EditOutlined } from "@ant-design/icons";
import { Popconfirm } from "antd";
import React from "react";
import EditOneProduct from "./EditOneProduct";

const EditProduct = () => {
  const confirm = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(null), 3000);
    });

  return (
    <Popconfirm
      title={EditOneProduct}
      onConfirm={confirm}
      onVisibleChange={() => console.log("visible change")}
    >
      <EditOutlined />
    </Popconfirm>
  );
};

export default EditProduct;
