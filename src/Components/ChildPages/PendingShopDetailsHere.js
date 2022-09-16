import { Card, Row } from "antd";
import React from "react";
import img1 from "../../assets/images/product.jpg";

const PendingShopDetailsHere = (props) => {
  console.log("Props are here", props.data)
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
            <b>Name:</b> {props.data.name}
          </h4>
          <p>
            <b>Shop ID:</b> {props.data.id} <br />
          </p>
          <p>
            <b>Foundation Date:</b> {props.data.foundDate}
          </p>
          <p>
            <b>Created Date:</b> {props.data.createdAt}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default PendingShopDetailsHere;
