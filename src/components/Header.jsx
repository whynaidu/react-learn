import React, { Component } from "react";
import { Link } from "react-router-dom";
import withRouter from "./withRouter";

import StayPrimaryPortraitIcon from "@mui/icons-material/StayPrimaryPortrait";


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "",
    };
  }

  componentDidMount() {
console.log(this.props)

    this.setState({
      page: this.props.params.mobile,
    },() => console.log(this.state));
  }
  render() {
    return (
      <div>
        <header className="body-font text-gray-600">
          <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
            <nav className="flex flex-wrap items-center text-base md:ml-auto lg:w-2/5"></nav>
            <a className="title-font order-first mb-4 flex items-center font-medium text-gray-900 md:mb-0 lg:order-none lg:w-1/5 lg:items-center lg:justify-center">
              <img src="../logo-cropped.svg" style={{ height: "60px" }} />
            </a>
            <div className="ml-5 inline-flex lg:ml-0 lg:w-2/5 lg:justify-end">
              <div className="mr-5 hover:text-gray-900">
                <Link to="/mobile">
                  <StayPrimaryPortraitIcon
                    style={{ fontSize: "40px", color: "black" }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
export default withRouter(Header);
