import { Avatar, Button, Card, Col, Row, Table, Typography } from "antd";

// Images
import {
  DeleteOutlined,
  FileTextOutlined,
  StarOutlined
} from "@ant-design/icons";

import face from "../../assets/images/face-1.jpg";
import face2 from "../../assets/images/face-2.jpg";
import face3 from "../../assets/images/face-3.jpg";

const { Title } = Typography;

// table code start
const columns = [
  {
    title: "NAME",
    dataIndex: "name",
    key: "name",
    width: "32%",
  },
  {
    title: "Comment & Review",
    dataIndex: "content",
    key: "function",
  }
];

const data = [
  {
    key: "1",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face2}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>Asif Akbar</Title>
            <p>asifakbar@gmail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <p>Very Good Product</p>
          <div>
            <StarOutlined />
            <StarOutlined />
            <StarOutlined />
            <StarOutlined />
            <StarOutlined />
          </div>
        </div>
      </>
    ),

    status: (
      <>
        <Button>
          <FileTextOutlined />
        </Button>
        <Button style={{ marginLeft: "2px" }}>
          <DeleteOutlined />
        </Button>
      </>
    ),
  },

  {
    key: "2",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face3}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>Anaira Lexix</Title>
            <p>anaira@mail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <p>Very Good Product</p>
          <div>
            <StarOutlined />
            <StarOutlined />
            <StarOutlined />
            <StarOutlined />
            <StarOutlined />
          </div>
        </div>
      </>
    ),

    status: (
      <>
        <Button>
          <FileTextOutlined />
        </Button>
        <Button style={{ marginLeft: "2px" }}>
          <DeleteOutlined />
        </Button>
      </>
    ),
  },

  {
    key: "3",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={face}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>Afifa Liras</Title>
            <p>afifaliras@mail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <p>Very Good Product</p>
          <div>
            <StarOutlined />
            <StarOutlined />
            <StarOutlined />
            <StarOutlined />
            <StarOutlined />
          </div>
        </div>
      </>
    ),

    status: (
      <>
        <Button>
          <FileTextOutlined />
        </Button>
        <Button style={{ marginLeft: "2px" }}>
          <DeleteOutlined />
        </Button>
      </>
    ),
  },
];
// project table start

function TotalComment({comments}) {
  const onChange = (e) => console.log(`radio checked:${e.target.value}`);

  return (
    <>
      <div className="tabled">
        <Row gutter={[14, 0]}>
          <Col xs="24" ml={14}>
            <Card
              bordered={false}

              //title="Users"
            >
              <div className="table-responsive">
                <Table
                  columns={columns}
                  dataSource={comments}
                  pagination={false}
                  className="ant-border-space"
                />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default TotalComment;
