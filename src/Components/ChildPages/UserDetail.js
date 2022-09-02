import { Popconfirm, message } from "antd";
import "antd/dist/antd.css";
import { SelectOutlined } from "@ant-design/icons";
import TotalComment from "./TotalComment";
import UserDetailsHere from "./UserDetailsHere";

function UserDetail() {
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
        title={UserDetailsHere}
        onConfirm={confirm}
        onCancel={cancel}
        okText="Update"
        cancelText="X"
      >
        <a href="..">
          <SelectOutlined />
        </a>
      </Popconfirm>
    </>
  );
}

export default UserDetail;
