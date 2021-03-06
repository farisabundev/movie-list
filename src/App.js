import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Col, Row, Typography, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "./config/reducers/movies";

import baseURL from "./config/baseURL";

import "./App.scss";

import LandingPage from "./components/LandingPage";
import Layout from "./components/Layout";
import InfiniteScroll from "./components/InfiniteScroll";
import EmptyState from "./components/EmptyState";

const App = () => {
  const [searchKey, setSearchKey] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [loadMore, setLoadMore] = useState(true);
  const [isEndOfSearch, setIsEndOfSearch] = useState(false);
  const [params, setParams] = useState({
    apikey: "faf7e5bb",
    r: "json",
    page: 1,
  });
  const [selectedPoster, setSelectedPoster] = useState(null);
  const [viewComponent, setViewComponent] = useState("INIT_PAGE");

  // redux
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    loadMovies();
  }, [params]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const loadMovies = async () => {
    if (!isEndOfSearch) {
      setIsLoading(true);

      try {
        let res = await axios.get(baseURL, {
          params,
        });

        if (res && res.data?.Response === "True") {
          let new_arr = [...movies, ...res.data.Search];

          dispatch(setMovies(new_arr));
          setViewComponent("DATA_FOUND");
        } else if (
          res.data?.Response === "False" &&
          res.data?.Error === "Incorrect IMDb ID."
        ) {
          dispatch(setMovies([]));
          setViewComponent("INIT_PAGE");
        } else {
          setViewComponent(movies.length ? "DATA_FOUND" : "DATA_EMPTY");
          setIsEndOfSearch(true);
        }

        setIsLoading(false);
        setLoadMore(false);
      } catch (error) {
        setIsLoading(false);
        throw error;
      }
    }
  };

  const refineSearch = () => {
    if (searchKey) {
      dispatch(setMovies([]));

      setIsEndOfSearch(false);
      setParams({ ...params, s: searchKey, page: 1 });
      window.scrollTo(0, 0);
    }
  };

  const handleScroll = () => {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    const scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;

    setLoadMore(scrollTop + window.innerHeight >= scrollHeight);
  };

  useEffect(() => {
    if (loadMore && !isLoading) {
      let newPage = params.page + 1;
      setParams({ ...params, page: newPage });
    }
  }, [loadMore]);

  const handlePosterImage = (val) => {
    if (val.Poster !== "N/A") {
      setSelectedPoster(val);
    }
  };

  return (
    <>
      <Modal
        centered
        title={null}
        footer={null}
        visible={selectedPoster !== null}
        onCancel={() => setSelectedPoster(null)}
      >
        <img src={selectedPoster?.Poster} />
      </Modal>

      <div>
        <Layout
          searchKey={searchKey}
          viewComponent={viewComponent}
          onButtonSubmit={refineSearch}
          onChange={(e) => setSearchKey(e)}
        >
          <RenderViewComponent
            searchKey={searchKey}
            viewComponent={viewComponent}
            onButtonSubmit={refineSearch}
            onChange={(e) => setSearchKey(e)}
            handlePosterImage={(val) => handlePosterImage(val)}
            movies={movies}
            isLoading={isLoading}
            loadMore={loadMore}
            isEndOfSearch={isEndOfSearch}
          />
        </Layout>
      </div>
    </>
  );
};

const RenderViewComponent = ({
  viewComponent,
  searchKey,
  onButtonSubmit,
  onChange,
  handlePosterImage,
  movies,
  isLoading,
  loadMore,
  isEndOfSearch,
}) => {
  if (viewComponent === "INIT_PAGE") {
    return (
      <LandingPage
        searchKey={searchKey}
        viewComponent={viewComponent}
        onButtonSubmit={onButtonSubmit}
        onChange={onChange}
      />
    );
  } else if (viewComponent === "DATA_EMPTY") {
    return <EmptyState />;
  } else {
    return (
      <InfiniteScroll
        isEndOfSearch={isEndOfSearch}
        isLoading={isLoading}
        loadMore={loadMore}
        movies={movies}
        handlePosterImage={(val) => handlePosterImage(val)}
      />
    );
  }
};

export default App;
