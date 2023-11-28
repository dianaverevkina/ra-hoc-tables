import React from 'react';
import './App.css';
import { MonthTable } from './componets/MonthTable';
import { YearTable } from './componets/YearTable';
import { SortTable } from './componets/SortTable';
import { SortData } from './componets/SortData';

export default class App extends React.Component {
  state = {
      list: []
  };

  componentDidMount(){
    fetch(process.env.REACT_APP_DATES_API_URL)
      .then(response => response.json())
      .then(result => this.setState({list: result.list}))
  }

  render() {
      const {list} = this.state;
      return (
          <div id="app">
            <SortData Component={MonthTable} list={list} propName={'month'} />
            <SortData Component={YearTable} list={list} propName={'year'} />
            <SortData Component={SortTable} list={list} propName={'date'} />
          </div>
      );
  }
}