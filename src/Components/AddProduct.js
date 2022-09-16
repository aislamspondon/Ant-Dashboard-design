
import axios from "axios";
import React, { useState } from "react";
import { message } from "antd";
import { ProductForm } from "./form/product"

const AddProduct = () => {
  const [isLoading, setLoading] = useState(false)

  const handleSubmit = async (values) => {
    try {
      setLoading(true)
      const header = {
        headers: { Authorization: "Bearer " + localStorage.getItem("access_token") }
      }

      const response = await axios.post(`https://merchport.z1p.xyz/api/products`, values, header)
      if (response && response.status === 201) {
        message.success("Product uploaded.")
      }
      setLoading(false)
    } catch (error) {
      if (error) {
        setLoading(false)
        message.error("Something going wrong.")
      }
    }
  };

  return (
    <>
      <div style={{ padding: "130px", paddingRight: "31%" }}>
        <ProductForm
          loading={isLoading}
          onSubmit={data => handleSubmit(data)}
        />
      </div>
    </>
  );
};

export default AddProduct;
