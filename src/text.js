import { Component } from "react";

import Form from "./components/form";
import Cardlist from "./components/cardlist";


export default class Test extends Component {
  state = {
    profiles: [],
  };

  addNewProfile = (profile) => {
    this.setState({
      profiles: [...this.state.profiles, profile],
    });
  };

  render() {
    console.log(this.state.profiles);

    return (
      <div>
        <h4>GITHUB PROFILE CARDS</h4>
        <Form onSubmit={this.addNewProfile} />
        <Cardlist profiles={this.state.profiles} />
      </div>
    );
  }
}
