import { FastBackwardOutlined, InboxOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputNumber, Upload } from "antd";

import React from "react";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const normFile = (e) => {
  console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }

  return e?.fileList;
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const AddProduct = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <>
      <div style={{ padding: "130px", paddingRight: "31%" }}>
        <a href="/home">
          <Button style={{ color: "#40A9FF" }}>
            <FastBackwardOutlined />
            Back Dashboard
          </Button>
        </a>
        <h4
          className="text-center "
          style={{ color: "#40A9FF", fontSize: "30px", marginLeft: "30%" }}
        >
          <b>Add Product</b>
        </h4>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            label="Product Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Enter Your Product Name..." />
          </Form.Item>
          <Form.Item
            name={["user", "Category"]}
            label="Category"
            rules={[
              {
                type: "text",
              },
            ]}
          >
            <Input placeholder="Enter Your Category..." />
          </Form.Item>
          <Form.Item
            name={["user", "Price"]}
            label="Price"
            rules={[
              {
                type: "number",
                min: 0,
                max: 10000,
              },
            ]}
          >
            <InputNumber placeholder="Price" />
          </Form.Item>

          <Form.Item name={["user", "Description"]} label="Description">
            <Input.TextArea placeholder="Enter Product Description" />
          </Form.Item>
          <Form.Item label="Dragger">
            <Form.Item
              name="dragger"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              noStyle
            >
              <Upload.Dragger name="files" action="/upload.do">
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload.
                </p>
              </Upload.Dragger>
            </Form.Item>
          </Form.Item>
          <br />
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 21 }}>
            <a href="/dashboard">
              <Button
                type="primary"
                htmlType="submit"
                style={{ hight: "50px", wight: "20px" }}
              >
                Add Product
              </Button>
            </a>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default AddProduct;
