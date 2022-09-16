import { DeleteOutlined, SearchOutlined } from "@ant-design/icons";
import {
  Button,
  Divider,
  Image,
  Input,
  message,
  Popover, Table, Typography
} from "antd";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Comment from "./ChildPages/Comment";
import EditProduct from "./ChildPages/EditProduct";
import { DeleteConfirmation } from "./modal/delete.modal"

let { Title } = Typography;

const columns = [
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
  },
  {
    title: "Comments",
    dataIndex: "comments",
    key: "comments",
  },
  {
    title: "Edit",
    dataIndex: "edit",
    key: "edit",
  },
  {
    title: "Delete",
    dataIndex: "delete",
    key: "delete",
  },
];

export default function Products() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchText, setSearchText] = useState("");
  const [product, setProduct] = useState();
  const [productWillDelete, setProductWillDelete] = useState({ id: null, open: false })
  const header = {
    headers: { Authorization: "Bearer " + localStorage.getItem("access_token") }
  }

  const SearchProductButton = (e) => setSearchText(e.target.value);


  /* Handle delete modal */
  const handleDeleteModal = (id) => setProductWillDelete({ id: id, open: true })

  /* Handle cancel */
  const handleCancel = () => setProductWillDelete({ id: null, open: false })

  /* Handle delete from server */
  const handleOk = async () => {
    try {
      const response = await axios.delete(`https://merchport.z1p.xyz/api/products/${productWillDelete.id}`, header);
      console.log(response);
      if (response && response.status === 200) {
        getProducts()
        message.success("Product deleted.")
        setProductWillDelete({ id: null, open: false })
      }
    } catch (error) {
      if (error) {
        setProductWillDelete({ id: null, open: false })
        message.error("Failed to delete product.")
      }
    }
  }


  /* Fetch products  */
  const getProducts = useCallback(async () => {
    const products = await axios.get("https://merchport.z1p.xyz/api/_products?take=30");
    const allProducts = products.data.result;
    allProducts.forEach((product) => {
      const imageLocation = product.images.length > 0 ? product.images[0].location : null;
      product["image"] = (
        <Image
          width={80}
          height={80}
          src={imageLocation}
        />
      );
      product["delete"] = (
        <Button
          type="danger"
          onClick={() => handleDeleteModal(product.id)}
        >
          <DeleteOutlined />
        </Button>
      );
      product["edit"] = (
        <Popover placement="bottom" trigger="click">
          <Button>
            <EditProduct product={product} />
          </Button>
        </Popover>
      );
      product["comments"] = (
        <Comment prodId={product.id} />
      )
    });

    setProduct(allProducts);
  }, [])

  useEffect(() => {
    getProducts();
  }, [getProducts]);


  const start = () => {
    setLoading(true); // ajax request after empty completing

    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys) => setSelectedRowKeys(newSelectedRowKeys);

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;


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
        Products
      </Title>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Input
          placeholder="Search For Find Shop"
          prefix={<SearchOutlined />}
          style={{
            width: 400,
            height: 50,
            marginBottom: 20,
            paddingLeft: 30,
            fontSize: 16,
            borderRadius: 12,
          }}
          onChange={SearchProductButton}
          allowClear
          value={searchText}
        />
        <a href="/addproduct">
          <Button
            type="primary"
            shape="round"
            style={{ width: 200, height: 50 }}
          >
            Add New
          </Button>
        </a>
      </div>

      <Divider />

      <div
        style={{
          marginBottom: 16,
        }}
      >
        <Button
          type="primary"
          onClick={start}
          disabled={!hasSelected}
          loading={loading}
        >
          Reload
        </Button>
        <span
          style={{
            marginLeft: 8,
          }}
        >
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
        </span>
      </div>
      {product ? (

        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={product.length > 0 ? product.filter((val) => {
            if (searchText === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchText.toLowerCase())
            ) {
              return val;
            }
          }) : product}
          pagination={{
            current: page,
            pageSize: pageSize,
            onChange: (page, pageSize) => {
              setPage(page);
              setPageSize(pageSize);
            },
          }}
        />
      ) : null
      }


      {/* Delete confirmation modal */}
      <DeleteConfirmation
        open={productWillDelete.open}
        handleOk={handleOk}
        handleCancel={handleCancel}
        message="Want to delete this product?"
      />
    </>
  );
}
