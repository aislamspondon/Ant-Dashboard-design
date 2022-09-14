
import { Button, Checkbox, Form, Input, Typography } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
let { Title } = Typography;


export default function LoginTab() {
  const [flag, setFlag] = useState(false);
  const onFinish = async(values) => {
    console.log(values)


    const login = await axios.post('https://merchport.z1p.xyz/api/auth/login',values);
    console.log(login);
    if(login.status !== 401){
      localStorage.setItem('access_token', login.data.access_token);
      localStorage.setItem('refresh_token', login.data.refresh_token);
      localStorage.setItem('name', login.data.user.profile.displayName);
      setFlag(true);

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
      <div>
        {flag ? <Navigate to="/home"/> : null} 
      </div>
    </>
  );
}
