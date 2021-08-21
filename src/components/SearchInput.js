import React, { useEffect, useState } from "react";
import { Button, Col, Input, Row, AutoComplete } from "antd";
import axios from "axios";
import baseURL from "../config/baseURL";

const SearchInput = ({ justify, value, onChange, onButtonSubmit }) => {
  let timeout = null;
  const [suggestions, setSuggestions] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onButtonSubmit();
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchList();
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [value]);

  const fetchList = async () => {
    try {
      let params = {
          apikey: "faf7e5bb",
          r: "json",
          page: 1,
          s: value,
        },
        res = await axios.get(baseURL, { params: params });

      if (res && res.data?.Response === "True") {
        let new_arr = res.data.Search.map((each) => {
          return {
            label: each.Title,
            value: each.Title,
          };
        });

        setSuggestions(new_arr);
      }
    } catch (err) {
      throw err;
    }
  };

  return (
    <Row className="movie-list-search-input_wrapper" justify={justify}>
      <Col flex="auto">
        {/* <Input
          value={value}
          onChange={onChange}
          placeholder="Search movie title..."
          onKeyDown={handleKeyDown}
        /> */}
        <AutoComplete
          options={suggestions}
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          placeholder="Search movie title..."
          style={{ width: "100%" }}
        />
      </Col>
      <Col>
        <Button onClick={onButtonSubmit}>Search</Button>
      </Col>
    </Row>
  );
};

export default SearchInput;
