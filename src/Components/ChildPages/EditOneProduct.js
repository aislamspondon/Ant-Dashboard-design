import { Button, Form, Input, message } from "antd";
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

const EditOneProduct = ({product}) => {
  //console.log(product);
  const prodCategories = product.categories;
  const categories = [];
  const onFinish = (values) => {
    console.log(values);
  };
  const onFinishFailed = ()=>{
    message.error("Error");
  }
  prodCategories.forEach((single)=>{
    console.log(single.name);
    categories.push(single.name);
  })


  return (
    <Form
      {...layout}
      name="nest-messages"
      // onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      validateMessages={validateMessages}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
          },
        ]}
        initialValue={product.name}
      >
        <Input placeholder={product.name} />
      </Form.Item>
      <Form.Item
        label="Category"
        name="categories"
        initialValue={categories.join(",")}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Price" name="price" initialValue={product.price}>
        <Input  />
      </Form.Item>
      <Form.Item label="Description" name="description" initialValue={product.description}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item>

      <Button type="primary" htmlType="submit" onClick={(event)=>onFinish(event)}>
        Submit
      </Button>
      </Form.Item>
    </Form>
  );
};

export default EditOneProduct;
