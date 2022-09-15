import { Card, Row } from "antd";
import React from "react";
import img1 from "../../assets/images/product.jpg";

const PendingShopDetailsHere = () => {
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
            {/* <Button type="link">{pencil}</Button> */}
          </Row>

          <h4>
            <b>Name:</b> Product
          </h4>
          <p>
            <b>Description:</b> Hi, This is shop user details . <br />.
          </p>
          <p>
            <b>Mobile:</b> (88) 1211 1214 123
          </p>
          <p>
            <b>Email:</b> ****@gmail.com
          </p>
          <p>
            <b>Location:</b> BD
          </p>
          <p>
            <b>Total Order: </b>5
          </p>
          <p>
            <b>Last Order:</b> 22-02-2022
          </p>
        </div>
      </div>
    </Card>
  );
};

export default PendingShopDetailsHere;
