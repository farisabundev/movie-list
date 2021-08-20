import { Typography, Image, Row, Col } from "antd";
import React from "react";

import imageError from "../../assets/image-not-found.png";

const MovieCard = ({ data }) => {
  const { Poster, Title, Year } = data;

  return (
    <Row className="movie-card" gutter={30}>
      <Col sm={{ span: 24 }} md={{ span: 3 }}>
        <Image src={Poster} alt={Title} fallback={imageError} />
      </Col>
      <Col
        sm={{ span: 24 }}
        md={{ span: 21 }}
        className="movie-card_information"
      >
        <Typography.Title level={3}>
          {Title} ({Year})
        </Typography.Title>
      </Col>
    </Row>
  );
};

export default MovieCard;
