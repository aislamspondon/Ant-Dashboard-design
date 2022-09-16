import { EditOutlined } from "@ant-design/icons";
import { Popconfirm } from "antd";
import React from "react";
import EditOneProduct from "./EditOneProduct";

const EditProduct = ({product}) => {
  //console.log(product);
  const confirm = (values) => {
    console.log(values)
  }
    // new Promise((resolve) => {
    //   setTimeout(() => resolve(null), 3000);
    // });

  return (
    <Popconfirm
      title={<EditOneProduct product={product}/>}
      onConfirm={confirm}
    >
      <EditOutlined />
    </Popconfirm>
  );
};

export default EditProduct;
