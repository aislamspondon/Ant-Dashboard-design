import { Form, Input } from "antd";
import React from "react";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
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

const EditOneProduct = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input value="Chocolate 1" />
      </Form.Item>
      <Form.Item
        label="Category"
        rules={[
          {
            type: "email",
          },
        ]}
      >
        <Input value="desserts" />
      </Form.Item>

      <Form.Item label="Status">
        <Input />
      </Form.Item>
      <Form.Item label="Description">
        <Input.TextArea value="provides plenty of UI components to enrich your web applications, and we will improve components experience consistently." />
      </Form.Item>
    </Form>
  );
};

export default EditOneProduct;
