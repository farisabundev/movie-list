import React from "react";
import { Row, Col, Typography } from "antd";
import SearchInput from "./SearchInput";

const LandingPage = ({ searchKey, onChange, onButtonSubmit }) => {
  return (
    <div className="centered-div">
      <div>
        <div className="text-center">
          <Typography.Title level={2}>OMDb Movie List</Typography.Title>
        </div>
        <SearchInput
          justify="center"
          value={searchKey}
          onChange={onChange}
          onButtonSubmit={onButtonSubmit}
        />
      </div>
    </div>
  );
};

export default LandingPage;
