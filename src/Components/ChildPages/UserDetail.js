import { SelectOutlined } from "@ant-design/icons";
import { message, Popconfirm } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import UserDetailsHere from "./UserDetailsHere";

function UserDetail({ userDetailsList }) {
  const userDetails = userDetailsList;
  const [user, setUser] = useState();
  const getUserInfo = async () => {
    if (typeof windows !== undefined) {
      const user = await axios.get(
        `https://merchport.z1p.xyz/api/users/${userDetails.id}`
      );
      setUser(user.data.account);
    }
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  console.log("This is userDetails", userDetails);

  function confirm(e) {
    console.log(e);
    message.success("Click on Yes");
  }

  function cancel(e) {
    console.log(e);
    message.error("Click on Back");
  }
  return (
    <>
      <Popconfirm
        placement="topLeft"
        title={<UserDetailsHere data={user} />}
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

export default UserDetail;
