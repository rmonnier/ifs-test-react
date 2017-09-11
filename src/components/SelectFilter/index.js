import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

// import components
import FilterList from 'components/FilterList';
import FilterSearch from 'components/FilterSearch';

import styles from './index.css';

export default class SelectFilter extends Component {

    static propTypes = {
        filters: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            children: PropTypes.array,
        })).isRequired,
        updateSelectedFilter: PropTypes.func,
        updateSearch: PropTypes.func,
        selectedFilter: PropTypes.string,
        rootStyle: PropTypes.string,
    }

    render() {
        const {
            rootStyle,
            filters,
            updateSelectedFilter,
            updateSearch,
            selectedFilter,
        } = this.props;

        return (
            <div className={ classNames(styles.selectfilter, rootStyle)}>
                <FilterSearch
                    updateSearch={ updateSearch }
                />
                <FilterList
                  filters={filters}
                  updateSelectedFilter={updateSelectedFilter}
                  selectedFilter={selectedFilter}
                />
            </div>
        )
    }
}
