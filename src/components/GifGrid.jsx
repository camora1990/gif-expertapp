import React, { useState } from "react";
import PropTypes from "prop-types";

import { Pagination } from "antd";
import { GridItem } from "./GridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { Loading } from "./Loading";

const GifGrid = ({ category, accordion }) => {
  const [offset, setOffset] = useState(0);

  const { loading, totalData, data } = useFetchGifs(offset, category);

  const onChangePage = (page) => {
    setOffset(page);
  };

  return (
    <>
      { loading && <Loading  />}
      <div className="accordion-item mb-2 animate__animated animate__zoomInDown">
        <h2 className="accordion-header" id={`flush-heading${accordion}`}>
          <button
            className="accordion-button collapsed border"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#flush-collapse${accordion}`}
            aria-expanded="false"
            aria-controls={`flush-collapse${accordion}`}
          >
            {category.toUpperCase()}
          </button>
        </h2>
        <div
          className="accordion-collapse collapse animate__animated animate__flash"
          id={`flush-collapse${accordion}`}
          aria-labelledby={`flush-heading${accordion}`}
          data-bs-parent={`#flush-heading${accordion}`}
        >
          {" "}
          <div className="row card-deck ">
            {data.map((gif) => (
              <GridItem key={gif.id} {...gif} />
            ))}
          </div>
          <div className="mb-3 d-flex justify-content-end">
            <Pagination
              defaultCurrent={offset}
              total={totalData}
              onChange={onChangePage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
