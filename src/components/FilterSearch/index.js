import React, { PropTypes } from 'react'

const FilterSearch = ({updateSearch}) =>
  <div>
    <h2>select a channel</h2>
    <input
      type="text"
      placeholder="Search"
      autoFocus
      onChange={updateSearch}
      className="form-control"
    />
  </div>

FilterSearch.propTypes = {
    updateSearch: PropTypes.func,
};

export default FilterSearch;
