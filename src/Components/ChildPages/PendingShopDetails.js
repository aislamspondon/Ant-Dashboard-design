import { SelectOutlined } from "@ant-design/icons";
import { message, Popconfirm } from "antd";
import "antd/dist/antd.css";
import PendingShopDetailsHere from "./PendingShopDetailsHere";

function PendingShopDetails() {
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
        title={PendingShopDetailsHere}
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

export default PendingShopDetails;
