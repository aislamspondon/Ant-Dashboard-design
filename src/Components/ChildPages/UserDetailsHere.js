import { Card, Row } from "antd";

import img1 from "../../assets/images/product.jpg";

const UserDetailsHere = ({data}) => {
  const user = data;
  
  return (
    <Card>
      <div
        style={{
          display: "flex",
          padding: "2px",
          margin: "3px",
          justifyContent: "space-between",
        }}
      >
        <div>
          <img src={img1} alt="" style={{ height: "60px", width: "60px" }} />
        </div>
        <div style={{ margin: "5px", paddingLeft: "10px" }}>
          <Row>
            <h3 style={{ marginTop: "12px" }}>User Details Here</h3>
   
          </Row>

          <h4>
            <b>Name:</b> {user.username}
          </h4>
          <p>
            <b>Mobile:</b> {user.phoneNumber}
          </p>
          <p>
            <b>Email:</b> {user.email}
          </p>
          <p>
            <b>Created at:</b> {user.createdAt}
          </p>

        </div>
      </div>
    </Card>
  );
};

export default UserDetailsHere;
