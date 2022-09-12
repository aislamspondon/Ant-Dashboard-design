import { StopOutlined } from "@ant-design/icons";
import { Button, message, Typography } from "antd";
import axios from "axios";
import { React, useEffect, useState } from "react";
import TableData from "./TableData/TableData";
let { Title } = Typography;


const columns = [
  {
    title: "NO",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "displayName",
    key: "displayName",
  },
  {
    title: "USERNAME",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "PHONE",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
  },
  {
    title: "EMAIL",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "ACTION",
    dataIndex: "button",
    key: "key",
  },
];

export default function Users() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [dataArray, setDataArray] = useState();

  const suspendUser = async(e,uid) => {
    const suspenduser = await axios.put(`https://merchport.z1p.xyz/api/_users/${uid}/disable`);
    if(suspenduser.status === 200){
      getUsers();
      message.success("User Suspended");
    }
    else {
      message.error("Something went wrong");
      
    }
    
  }

  const getUsers = async () => {
    if (typeof windows !== undefined) {
      const tempArray = [];
        const users = await axios.get("https://merchport.z1p.xyz/api/_users");
        //console.log(users.data);
        const allusers = users.data.result;
        allusers.forEach((user) => {
          const dataObject = {};
          
          dataObject["id"] = user.id;
          dataObject["displayName"] = user.profile.displayName;
          dataObject["username"] = user.account.username;
          dataObject["email"] = user.account.email;
          dataObject["phoneNumber"] = user.account.phoneNumber;
          dataObject["button"] = (
            <Button type="danger" onClick={(e)=>suspendUser(e,user.id)} icon={<StopOutlined />}>
              Suspend/Restrict
            </Button>)
          
          tempArray.push(dataObject);
        });
        setDataArray(tempArray);
      
      
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <Title
        style={{
          background: "#E9D7D7",
          alignItems: "center",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          padding: 10,
          borderRadius: 12,
        }}
      >
        Users
      </Title>
        <TableData data={dataArray} column={columns} pagination={{
          current: page,
          pageSize: pageSize,
          onChange: (page, pageSize) => {
            setPage(page);
            setPageSize(pageSize);
          },
        }}/>
      {/* <Table
        dataSource={data}
        columns={columns}
        pagination={{
          current: page,
          pageSize: pageSize,
          onChange: (page, pageSize) => {
            setPage(page);
            setPageSize(pageSize);
          },
        }}
      ></Table> */}
    </>
  );
}
