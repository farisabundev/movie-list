import { Col, Row } from "antd";
import React from "react";

import MovieCard from "./MovieCard";
import SkeletonFetching from "./SkeletonFetching";

const InfiniteScroll = ({
  isEndOfSearch,
  isLoading,
  loadMore,
  movies,
  handlePosterImage,
}) => {
  return (
    <Row gutter={[16, 16]} className="movie-result-wrapper">
      {!movies.length ? (
        <Col span={24} style={{ marginTop: 20 }}>
          <SkeletonFetching />
        </Col>
      ) : (
        movies.map((each, i) => (
          <Col span={24} key={i} style={{ marginTop: 20 }}>
            <MovieCard
              data={each}
              handlePosterImage={(val) => handlePosterImage(val)}
            />
          </Col>
        ))
      )}

      {loadMore && !isEndOfSearch ? (
        <Col span={24} style={{ marginTop: 20 }}>
          <SkeletonFetching />
        </Col>
      ) : (
        ""
      )}
      {/* {isEndOfSearch ? <div>No more data to load</div> : ""} */}
    </Row>
  );
};

export default InfiniteScroll;
