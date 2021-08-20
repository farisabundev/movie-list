import React from "react";
import { Col, Row } from "antd";

const Layout = (props) => {
  return (
    <Row className="movie-list-wrapper" justify="center">
      <Col span={20}>{props.children}</Col>
    </Row>
  );
};

export default Layout;
