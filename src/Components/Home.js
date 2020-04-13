import React from 'react'
import { withRouter } from 'react-router-dom'

class Home extends React.Component {

  goToAddEmployees() {
    this.props.history.push('/addEmployees')
  }

  render() {
    return (
      <div>
        <h1>Home</h1>

        <button onClick={this.goToAddEmployees.bind(this)}>Go to Add Employees</button>
      </div>
    );
  }
}

export default withRouter(Home)
