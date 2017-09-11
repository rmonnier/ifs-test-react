import React, { Component } from 'react'
import request from 'superagent'

// import components
import SelectFilter from 'components/SelectFilter';

import styles from './index.css'


export default class Home extends Component {

    state = {
        data: [],
        filters: [],
        selectedFilter: '',
    }

    updateSelectedFilter = selectedFilter => () => { this.setState({ selectedFilter }) }
    updateSearch = e => {
        const { data } = this.state;
        const re = new RegExp(`${e.target.value}`, 'i');
        const filters = data.map(({ name, children }) => {
            const filteredChildren = children.filter(({ name: filterName }) =>
                filterName.match(re)
            )
            return {
                name,
                children: filteredChildren,
            }
        })
        this.setState({ filters })
    }

    componentDidMount() {

        // do your xhr request here (http://localhost:5000/category)
        request
            .get('http://localhost:5000/category')
            .end((err, res) => {
                if (err) {throw err; }
                else {
                    this.setState({
                        data: res.body,
                        filters: res.body,
                    });
                }
            });
    }


    render() {
        const {
          filters,
          selectedFilter,
        } = this.state;

        return (
            <div className={ styles.home }>
                <h1>ifs test react</h1>
                <div style={ { display: 'flex' } } >
                <div>
                  <SelectFilter
                      filters={filters}
                      updateSelectedFilter={ this.updateSelectedFilter }
                      updateSearch={ this.updateSearch }
                      selectedFilter={ selectedFilter }
                      rootStyle={ styles.filter }
                  />
                </div>
                <div>
                  <h2>Filter by : {selectedFilter}</h2>
                </div>
                </div>
            </div>
        )
    }
}
