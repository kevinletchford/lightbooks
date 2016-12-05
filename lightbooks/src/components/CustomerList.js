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
        this.state.data.map((item,i) => <li key={i}>{item.name.first} {item.name.last}</li>)
    }
   </ul>
      </div>
    );
  }
}

export default CustomerList;
