import { Col, Row } from "antd";
import React from "react";
import "./App.scss";

const App = () => {
  return (
    <div>
      <Row className="movie-list-wrapper" justify="center">
        <Col span={20}>
          <h1>Movie List</h1>
        </Col>
      </Row>
    </div>
  );
};

export default App;
