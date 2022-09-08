import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Table, Typography } from "antd";
import axios from "axios";
import { React, useEffect, useState } from "react";
import UserDetail from "./ChildPages/UserDetail";
import TableData from "./TableData/TableData";
let { Title } = Typography;
const data = [
  {
    id: 1,
    name: "Amazon",
    shopId: "05364314752",
    email: "amazon458@gmail.com",
    mobile: "0000000000",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
  },
  {
    id: 2,
    name: "BSRM",
    shopId: "05388304752",
    email: "amazon458@gmail.com",
    mobile: "0000000000",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
  },
  {
    id: 3,
    name: "Silicon ",
    shopId: "05364317510",
    email: "amazon458@gmail.com",
    mobile: "0000000000",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
  },
  {
    id: 4,
    name: "Jack Shop",
    shopId: "05364313302",
    email: "amazon458@gmail.com",
    mobile: "0000000000",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
  },
  {
    id: 5,
    name: "Car House",
    shopId: "05364311073",
    email: "amazon458@gmail.com",
    mobile: "0000000000",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
  },
  {
    id: 6,
    name: "Movie Ghar",
    shopId: "05364310036",
    email: "amazon458@gmail.com",
    mobile: "0000000000",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
  },
  {
    id: 7,
    name: "Nylon Sher",
    shopId: "05510014752",
    email: "amazon458@gmail.com",
    mobile: "0000000000",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
  },
  {
    id: 8,
    name: "Rafid Milon Store",
    shopId: "05364310000",
    email: "amazon458@gmail.com",
    mobile: "0000000000",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
  },
  {
    id: 9,
    name: "Tesla",
    shopId: "05336454752",
    email: "amazon458@gmail.com",
    mobile: "0000000000",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
  },
  {
    id: 10,
    name: "Facebook",
    shopId: "07823314752",
    email: "amazon458@gmail.com",
    mobile: "0000000000",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
  },
  {
    id: 11,
    name: "RabRab Book House",
    shopId: "05136437492",
    email: "amazon458@gmail.com",
    mobile: "0000000000",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
  },
  {
    id: 12,
    name: "Rainbow Street",
    shopId: "05364951352",
    email: "amazon458@gmail.com",
    mobile: "0000000000",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
  },
  {
    id: 13,
    name: "Food Ala",
    shopId: "05364311032",
    email: "amazon458@gmail.com",
    mobile: "0000000000",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
  },
  {
    id: 14,
    name: "Nikon",
    shopId: "05396574752",
    email: "amazon458@gmail.com",
    mobile: "0000000000",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
  },
  {
    id: 15,
    name: "Alibaba",
    shopId: "05363020752",
    email: "amazon458@gmail.com",
    mobile: "0000000000",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
  },
  {
    id: 16,
    name: "Daraz",
    shopId: "05963514752",
    email: "amazon458@gmail.com",
    mobile: "0000000000",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
  },
  {
    id: 17,
    name: "Bikroy",
    shopId: "11544314752",
    email: "amazon458@gmail.com",
    mobile: "0000000000",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
  },
  {
    id: 18,
    name: "Coffee House",
    shopId: "05364319562",
    email: "amazon458@gmail.com",
    mobile: "0000000000",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
  },
  {
    id: 19,
    name: "Light House",
    shopId: "05399664752",
    email: "amazon458@gmail.com",
    mobile: "0000000000",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
  },
  {
    id: 20,
    name: "Raisul Estarn",
    shopId: "05396514752",
    email: "amazon458@gmail.com",
    mobile: "0000000000",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
  },
  {
    id: 21,
    name: "Lack House",
    shopId: "05364314555",
    email: "amazon458@gmail.com",
    mobile: "0000000000",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
  },
  {
    id: 22,
    name: "Aman Velly",
    shopId: "05364314784",
    email: "amazon458@gmail.com",
    mobile: "0000000000",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
  },
  {
    id: 23,
    name: "Ahad Mir Reja",
    shopId: "05364314924",
    email: "amazon458@gmail.com",
    mobile: "0000000000",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
  },
  {
    id: 24,
    name: "Akheri Barta",
    shopId: "05364315423",
    email: "amazon458@gmail.com",
    mobile: "0000000000",
    details: (
      <Button>
        <UserDetail style={{ height: "20px", width: "20px" }} />
      </Button>
    ),
  },
];

const columns = [
  {
    title: "NO",
    dataIndex: "id",
    key: "key",
  },
  {
    title: "NAME",
    dataIndex: "name",
    key: "key",
  },
  {
    title: "SHOP ID",
    dataIndex: "shopId",
    key: "key",
  },
  {
    title: "EMAIL",
    dataIndex: "email",
    key: "key",
  },
  {
    title: "PHONE",
    dataIndex: "mobile",
    key: "key",
  },
  {
    title: "Details",
    dataIndex: "details",
    key: "key",
  },
];


export default function FindShop() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchText, setSearchText] = useState("");
  const [shops, setShops] = useState();
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const columsNew = [
    {
        title: 'logo',
        dataIndex: "location",
        key: 'location',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
        title: 'Shop ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description'
    },
    ,{
      title: 'Foundation date',
      dataIndex: 'foundDate',
      key: 'foundDate'
    }
  ]

  const getShops = async () => {
    if (typeof window !== undefined) {
      const shops = await axios.get('https://merchport.z1p.xyz/api/shops');
      console.log(JSON.stringify(shops.data));
      setShops(shops.data.result);
      
    } 
  };
  useEffect(() => {
    getShops();
  }, []);

  
  
  
  /*{
      "id": "3a400526-3698-4566-9cae-c28d8e05fa63",
      "createdAt": "2022-09-06T14:53:10.414Z",
      "updatedAt": "2022-09-06T14:53:10.415Z",
      "name": "sadas",
      "foundDate": "2022-09-06T14:51:49.840Z",
      "description": "asdasdasd",
      "ownerUserId": "8c971653-c067-45e4-927e-e24655bf7620",
      "iconFileId": "1965c0de-d47e-4d94-a957-7bbf0a6eade5",
      "contactMethods": "[{\"key\":\"Signal\",\"value\":\"asdsa\"}]",
      "verified": false,
      "warranty": "asdasdas",
      "icon": {
        "id": "1965c0de-d47e-4d94-a957-7bbf0a6eade5",
        "location": "https://merchport-bucket.s3.ap-southeast-1.amazonaws.com/76651d3248b2f43e0559b208fae763bd"
      },
      "productPhotos": [],
      "_count": {
        "productPhotos": 0,
        "categories": 2,
        "products": 0,
        "views": 0,
        "comments": 0,
        "bookmarks": 0,
        "followers": 0
      }
    }, */

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
        All Shops List
      </Title>
      <Input
        placeholder="Search For Find Shop"
        prefix={<SearchOutlined />}
        style={{
          width: 400,
          height: 50,
          marginBottom: 20,
          paddingLeft: 30,
          fontSize: 16,
        }}
        onChange={handleChange}
        allowClear
        value={searchText}
      />

      <Table
        dataSource={data.filter((val) => {
          if (searchText === "") {
            return val;
          } else if (
            val.name.toLowerCase().includes(searchText.toLowerCase())
          ) {
            return val;
          }
        })}
        columns={columns}
        pagination={{
          current: page,
          pageSize: pageSize,
          onChange: (page, pageSize) => {
            setPage(page);
            setPageSize(pageSize);
          },
        }}
      ></Table>
      <TableData data={shops} column={columsNew} />
    </>
  );
}
