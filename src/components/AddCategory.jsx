import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setinputValue] = useState("");

  const handleInputSearch = (e) => {
    setinputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    inputValue.trim().length > 0 &&
      setCategories((categories) => [inputValue, ...categories]);
    setinputValue("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingSearchCategory"
            placeholder="Search category"
            value={inputValue}
            onChange={handleInputSearch}
          />
          <label htmlFor="floatingSearchCategory" className="text-muted">
            Search category
          </label>
        </div>
      </form>
    </>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
