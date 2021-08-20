import { Typography, Row, Col } from "antd";
import React from "react";

import imageError from "../assets/image-not-found.png";

const MovieCard = ({ data, handlePosterImage }) => {
  const { Poster, Title, Year } = data;

  return (
    <Row className="movie-card" justify="center" gutter={20}>
      <Col
        xs={{ span: 24 }}
        sm={{ span: 24 }}
        md={{ span: 3 }}
        lg={{ span: 3 }}
        xl={{ span: 3 }}
      >
        <div>
          <img
            className="movie-poster"
            src={Poster}
            alt={Title}
            onError={(e) => (e.target.src = imageError)}
            onClick={() => handlePosterImage(data)}
          />
        </div>
      </Col>
      <Col
        xs={{ span: 24 }}
        sm={{ span: 24 }}
        md={{ span: 21 }}
        lg={{ span: 21 }}
        xl={{ span: 21 }}
        className="movie-card_information"
      >
        <label className="movie-title">
          {Title} ({Year})
        </label>
      </Col>
    </Row>
  );
};

export default MovieCard;
