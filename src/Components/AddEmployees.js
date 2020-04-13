import React from 'react';
import { withRouter } from 'react-router-dom'

class AddEmployees extends React.Component {
  goBack() {
    this.props.history.push('/home')
  }

  render() {
    return (
      <div>
        <button onClick={this.goBack.bind(this)}>Back</button>
        <h1>Add Employees</h1>
      </div>
    );
  }
}

export default withRouter(AddEmployees)
