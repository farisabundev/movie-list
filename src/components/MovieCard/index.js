import { Typography, Row, Col } from "antd";
import React, { useEffect } from "react";

import imageError from "../../assets/image-not-found.png";

const MovieCard = ({ data, handlePosterImage }) => {
  const { Poster, Title, Year } = data;

  return (
    <Row className="movie-card" gutter={30}>
      <Col sm={{ span: 24 }} md={{ span: 3 }}>
        <img
					className="movie-poster"
          src={Poster}
          alt={Title}
          onError={(e) => (e.target.src = imageError)}
					onClick={() => handlePosterImage(data)}
        />
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
