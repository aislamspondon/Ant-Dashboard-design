import { CommentOutlined } from "@ant-design/icons";
import { Button, message, Popconfirm } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import TotalComment from "./TotalComment";

function Comment({prodId}) {
  const [comments, setComments] = useState();
  const getComments = async () => {
    const commentsList = await axios.get(`https://merchport.z1p.xyz/api/products/${prodId}/comments`);
    console.log(commentsList);
    if(commentsList.status === 200){
      setComments(commentsList.data);
    }
  }
  useEffect(() => {
    getComments();
  }, [])

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
        title={<TotalComment comments ={comments}/>}
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
