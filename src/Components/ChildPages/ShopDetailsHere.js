import { Card, Row } from "antd";

import img1 from "../../assets/images/product.jpg";

const ShopDetailsHere = ({ data }) => {
  const shop = data;

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
            <b>Name:</b> {shop.name}
          </h4>
          <p>
            <b>Shop ID:</b> {shop.id}
          </p>
          <p>
            <b>Found Date:</b> {shop.foundDate}
          </p>
          <p>
            <b>Created at:</b> {shop.createdAt}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ShopDetailsHere;
