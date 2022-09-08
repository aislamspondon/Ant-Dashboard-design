import { Button, Checkbox, Form, Input, Typography } from "antd";
import axios from "axios";
import React from "react";
import LayoutDashboard from "./Components/LayoutDashboard";
let { Title } = Typography;

export default function LoginTab() {
  // const username = "admin";
  // const password = "admin";
  const onFinish = async(values) => {
    console.log(values)
    const config = {
      method: "POST",
      body: values
    };

    const login = await axios.post('https://merchport.z1p.xyz/api/auth/login',values);
    console.log(login);
    if(login.status !== 401){
      <LayoutDashboard />;
    }
    else {
      onFinishFailed(login);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
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
        Welcome to Login Page
      </Title>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 110,
        }}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          style={{ width: "40%", alignItems: "center" }}
        >
          <Form.Item
            label="Username"
            name="login"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}
