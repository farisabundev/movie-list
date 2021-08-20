import React from "react";
import { Button, Col, Input, Row, Form } from "antd";

const SearchInput = ({ justify, value, onChange, onButtonSubmit }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onButtonSubmit();
    }
  };
  
  return (
    <Row className="movie-list-search-input_wrapper" justify={justify}>
      <Col flex="auto">
        <Input
          value={value}
          onChange={onChange}
          placeholder="Search movie title..."
          onKeyDown={handleKeyDown}
        />
      </Col>
      <Col>
        <Button onClick={onButtonSubmit}>Search</Button>
      </Col>
    </Row>
  );
};

export default SearchInput;
