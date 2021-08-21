import { Col, Row } from "antd";
import React from "react";

import MovieCard from "./MovieCard";

const InfiniteScroll = ({ isEndOfSearch, isLoading, loadMore, movies, handlePosterImage }) => {
  return (
    <Row gutter={[16, 16]} className="movie-result-wrapper">
      {!movies.length ? (
        <></>
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

      {loadMore && isLoading ? <div>Fetching...</div> : ""}
      {/* {isEndOfSearch ? <div>No more data to load</div> : ""} */}
    </Row>
  );
};

export default InfiniteScroll;
