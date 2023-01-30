import React, { Component } from 'react'

export default class Dashboard extends Component {
  componentDidMount() {
    const token = localStorage.getItem("token");

    if (token) {
      //     // redirect to dashboard page if user is logged in
      //       this.props.navigation("/dashboard");
    } else {

      
      //     // do not redirect if user is not logged in
    }
  }
  render() {
    return <div>dashboard</div>;
  }
}
