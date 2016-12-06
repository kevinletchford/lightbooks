import React, { Component } from 'react';
var CUSTOMERDATA = require('../../customers.json');

class CustomerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: CUSTOMERDATA
    };
  }
  render() {
    return (
      <div className="CustomerList">
   <ul>
     {
        this.state.data.slice(0, 10).map((item,i) => (
        <li key={i}>
          <h2>{item.name.first} {item.name.last}</h2>
          <div>{item.balance}</div>
        </li>)
        )
    }
   </ul>
      </div>
    );
  }
}

export default CustomerList;
