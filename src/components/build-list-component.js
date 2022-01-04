import React, { Component } from 'react';
import axios from 'axios';
import { FcApproval } from 'react-icons/fc';
import { FcCancel } from 'react-icons/fc';
import { Table } from 'react-bootstrap';

function Avatar(props) {
  
  if(props.user){
    return (
      <th> <FcApproval /></th>
    );
  }
  else{
    return (
      <th> <FcCancel /></th>
    );
  }
  
}

const Builds = props => (
    <tr>
      <td>{props.build.productVersion}</td>
      <td>{props.build.dbSchemaName}</td>
      <th>{props.build.buildNumber}</th>
      <td>{props.build.buildId}</td>
      <td>{props.build.buildDate}</td>
      <Avatar user={props.build.buildStatus} />
      <Avatar user={props.build.installationStatus} />
      <Avatar user={props.build.executionStatus} />
      <Avatar user={props.build.smokeStatus} />
      <Avatar user={props.build.smokeStatus} />
    </tr>
)

export default class BuildList extends Component {
  constructor(props) {
    super(props);
    this.state = {builds: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/buildoverview')
      .then(response => {
        this.setState({ builds: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }


  buildList() {
    return this.state.builds.reverse().map(currentbuild => {
      return <Builds build={currentbuild}/>;
    })
  }

  render() {
    return (
      <div>
        <h4>&nbsp;Build Overview</h4>

        <Table striped bordered hover responsive="lg">
        <thead>
          <tr>
            <th>Product <br/> Version</th>
            <th>Database <br/>Version</th>
            <th>Build #</th>
            <th>Build</th>
            <th>Build Date</th>
            <th>Build Status</th>
            <th>Installation</th>
            <th>Execution Status</th>
            <th>Smoke Status</th>
            <th>Regression Status</th>
          </tr>
        </thead>
        <tbody>
        { this.buildList() }
        </tbody>
        </Table>
      </div>
    )
  }
}