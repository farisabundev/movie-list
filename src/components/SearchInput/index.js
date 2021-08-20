import React from "react";
import { Button, Col, Input, Row } from "antd";

const SearchInput = ({ justify, onChange, onButtonSubmit }) => {
  return (
    <Row className="movie-list-search-input_wrapper" justify={justify}>
      <Col>
        <Input onChange={onChange} placeholder="Search movie title..." />
      </Col>
      <Col>
        <Button onClick={onButtonSubmit}>Search</Button>
      </Col>
    </Row>
  );
};

export default SearchInput;
