import { CommentOutlined } from "@ant-design/icons";
import { Button, message, Popconfirm } from "antd";
import "antd/dist/antd.css";
import TotalComment from "./TotalComment";

function Comment() {
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
        title={TotalComment}
        onConfirm={confirm}
        onCancel={cancel}
        okText="Delete"
        cancelText="Back"
      >
        <a href="..">
          <Button>
            <CommentOutlined />
          </Button>
        </a>
      </Popconfirm>
    </>
  );
}

export default Comment;
