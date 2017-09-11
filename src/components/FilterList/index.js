import React, { PropTypes } from 'react';

import styles from './index.css';

const FilterList = ({ filters, updateSelectedFilter, selectedFilter }) =>
  <div className={styles.filterList} >
    <ul>
      {
      filters.map(category =>
        category.children.length === 0 ?
        null:
        <li
        key={category.name}
        >
          <h3>
            {category.name}
          </h3>
          <ul className="list-group">
          {
            category.children.map((filter) =>
              <li
                key={filter.name}
                className={`list-group-item ${selectedFilter === filter.name ? 'active' : ''}`}
                onClick={updateSelectedFilter(filter.name)}
              >
                {filter.name}
              </li>
            )
          }
          </ul>
        </li>
        )
      }
    </ul>
  </div>

FilterList.propTypes = {
    filters: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        children: PropTypes.array,
    })).isRequired,
    updateSelectedFilter: PropTypes.func,
    selectedFilter: PropTypes.string,
};

export default FilterList;
