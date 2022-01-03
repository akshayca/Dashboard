import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

function Avatar(props) {
    const result = Math.round((props.user.passed / props.user.executed) * 100)
    return (
      <th style={{color: "orange"}}> {result}%</th>
    );
  
}

const Project_1s = props => (
  <tr>
    <td>{props.project_1.versionNumber}</td>
    <td>{props.project_1.testCategory}</td>
    <th>{props.project_1.buildNumber}</th>
    <th>{props.project_1.total}</th>
    <th>{props.project_1.executed}</th>
    <th style={{color: "green"}}>{props.project_1.passed}</th>
    <th style={{color: "red"}} >{props.project_1.failed}</th>
    <td>{props.project_1.error}</td>
    <Avatar user={props.project_1} />
  </tr>
)

export default class Project_1List extends Component {
  constructor(props) {
    super(props);
    this.state = {project_1s: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/project_1')
      .then(response => {
        this.setState({ project_1s: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }


  project_1List() {
    return this.state.project_1s.reverse().map(currentproject_1 => {
      return <Project_1s project_1={currentproject_1}/>;
    })
  }

  render() {
    return (
      <div>
        <h4>&nbsp;Project 1 Overview</h4>
        <Table striped bordered hover responsive="lg">
          <thead>
            <tr>
              <th>Product<br/>Version</th>
              <th>Test Category</th>
              <th>Build #</th>
              <th>Total Tests</th>
              <th>Executed</th>
              <th>PASSED</th>
              <th>FAILURES</th>
              <th>ERRORS</th>
              <th>SUCCESS RATE</th>
            </tr>
          </thead>
          <tbody>
            { this.project_1List() }
          </tbody>
        </Table>
      </div>
    )
  }
}