import React, { Component } from "react";
import MobileImage from "./MobileImage";


export default class Mobile extends Component {
  render() {
    return (
      <div className="p-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MobileImage />
          <MobileImage />
          <MobileImage />
          <MobileImage />
        </div>
      </div>
    );
  }
}
