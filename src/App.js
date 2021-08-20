import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Col, Row, Typography, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "./config/reducers/movies";

import baseURL from "./config/baseURL";

import "./App.scss";

import Layout from "./components/Layout";
import SearchInput from "./components/SearchInput";
import MovieCard from "./components/MovieCard";

const App = () => {
  const [searchKey, setSearchKey] = useState("batman");
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPoster, setSelectedPoster] = useState(null);

  // redux
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    console.log(selectedPoster);
  }, [selectedPoster]);

  // refs
  const layoutRef = useRef();

  useEffect(() => {
    setLoadMore(false);
    loadMovies();
  }, [loadMore]);

  const loadMovies = async () => {
    try {
      setIsLoading(true);
      setMovies([]);
      let params = {
        apikey: "faf7e5bb",
        r: "json",
      };

      if (searchKey) params.s = searchKey;

      let res = await axios.get(baseURL, {
        params,
      });

      if (res) {
        setIsLoading(false);
        dispatch(
          setMovies(res.data?.Response === "True" ? res.data.Search : [])
        );
      }
    } catch (error) {
      setIsLoading(false);
      throw error;
    }
  };

  const handlePosterImage = (val) => {
    setSelectedPoster(val);
    dispatch(showModal());
  };

  console.log();

  return (
    <>
      <Modal
        visible={selectedPoster !== null}
        onCancel={() => setSelectedPoster(null)}
        title={null}
        footer={null}
      >
        <img src={selectedPoster?.Poster} />
      </Modal>
      <div ref={layoutRef}>
        <Layout>
          <Row align="middle" justify="space-between">
            <Col span={12}>
              <Typography.Title>OMDb Movie List</Typography.Title>
            </Col>
            <Col span={12}>
              <SearchInput
                justify="end"
                onChange={(e) => setSearchKey(e.target.value)}
                onButtonSubmit={loadMovies}
              />
            </Col>
          </Row>

          {!movies.length ? (
            <></>
          ) : (
            <Row gutter={[16, 16]}>
              {movies.map((each, i) => (
                <Col span={24} key={i}>
                  <MovieCard
                    data={each}
                    handlePosterImage={(val) => handlePosterImage(val)}
                  />
                </Col>
              ))}
            </Row>
          )}
        </Layout>
      </div>
    </>
  );
};

export default App;
