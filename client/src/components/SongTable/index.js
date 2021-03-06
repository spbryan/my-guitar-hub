/********************************
  * Song Form
  * 
  * @author Sean Bryan
  * 
  * 2019-10-26
  ********************************/

import React, { Component } from 'react';
import API from "../../utils/API";
import { Redirect } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DataTable from 'react-data-table-component';

const columns = [
  {
    name: 'Title',
    selector: 'title',
    sortable: true,
  },
  {
    name: 'Artist',
    selector: 'artist',
    sortable: true
  },
  {
    name: 'Genre',
    selector: 'genre',
    sortable: true
  },
  {
    name: 'Guitar Type',
    selector: 'guitarType',
    sortable: true
  },
  {
    name: 'Proficiency',
    selector: 'proficiencyRating',
    sortable: true
  },
];

// const handleChange = (state) => {
//   // You can use setState or dispatch with something like Redux so we can use the retrieved data
//   console.log("Boom!");
// };

// const handleClick = (state) => {
//   // You can use setState or dispatch with something like Redux so we can use the retrieved data
//   console.log("Boom! " + JSON.stringify(state._id));
//   this.redirectLocation = '/song';
//   this.setState({ redirect: true });  // causes a re-render so put it last
// };

class SongTable extends Component {
  state = {
    redirect: false,
    song: []
  };

  redirectLocation = '';
  song = '';

  // handleChange = (state) => {
  //   // You can use setState or dispatch with something like Redux so we can use the retrieved data
  //   console.log("Boom!");
  // };
  
  handleClick = (state) => {
    this.redirectLocation = '/song';
    this.song = state;
    this.setState({ 
      redirect: true 
    });  // causes a re-render so put it last
  };

  render() {
    if (this.state.redirect) {
      // return <Redirect to={this.redirectLocation} />;
      return (<Redirect to={{
        pathname: this.redirectLocation,
        state: { song: this.song }
    }} />)
    }
    return (
      <DataTable
        // title="Song List"
        columns={columns}
        // data={data}
        data={this.props.data}
        striped={true}
        highlightOnHover={true}
        pointerOnHover={true}
        // selectableRows
        // onRowSelected={this.handleChange}
        onRowClicked={this.handleClick}
        pagination={true}
      />
    )
  }
}

export default SongTable;