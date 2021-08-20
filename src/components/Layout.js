import React, { useEffect } from "react";
import { Col, Row, Typography } from "antd";

import SearchInput from "./SearchInput";

const Layout = ({
  searchKey,
  viewComponent,
  onChange,
  onButtonSubmit,
  children,
}) => {
  return (
    <Row className="movie-list-wrapper" justify="center">
      <Col
        xs={{ span: 22 }}
        sm={{ span: 22 }}
        md={{ span: 20 }}
        lg={{ span: 20 }}
        xl={{ span: 20 }}
      >
        {viewComponent !== "INIT_PAGE" ? (
          <Row
            align="middle"
            justify="center"
            justify="space-between"
            gutter={[16, 16]}
          >
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 12 }}
              xl={{ span: 12 }}
            >
              <Typography.Title>OMDb Movie List</Typography.Title>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 12 }}
              xl={{ span: 12 }}
            >
              <SearchInput
                value={searchKey}
                onChange={onChange}
                onButtonSubmit={onButtonSubmit}
              />
            </Col>
          </Row>
        ) : (
          <></>
        )}

        {children}
      </Col>
    </Row>
  );
};

export default Layout;
