import { Row, Skeleton, Col } from "antd";
import React from "react";

const EachSkeleton = () => (
  <Row
    gutter={20}
    align="middle"
    style={{ marginTop: 20 }}
    className="skeleton-movie"
  >
    <Col
      xs={{ span: 24 }}
      sm={{ span: 24 }}
      md={{ span: 3 }}
      lg={{ span: 3 }}
      xl={{ span: 3 }}
    >
      <Skeleton.Image active />
    </Col>
    <Col
      xs={{ span: 24 }}
      sm={{ span: 24 }}
      md={{ span: 21 }}
      lg={{ span: 21 }}
      xl={{ span: 21 }}
    >
      <Skeleton paragraph={{ rows: 0 }} active />
    </Col>
  </Row>
);

const SkeletonFetching = () => {
  return (
    <>
      <EachSkeleton />
      <EachSkeleton />
      <EachSkeleton />
    </>
  );
};

export default SkeletonFetching;
