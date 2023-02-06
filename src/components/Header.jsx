import React, { Component } from "react";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header className="body-font text-gray-600">
          <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
            <nav className="flex flex-wrap items-center text-base md:ml-auto lg:w-2/5"></nav>
            <a className="title-font order-first mb-4 flex items-center font-medium text-gray-900 md:mb-0 lg:order-none lg:w-1/5 lg:items-center lg:justify-center">
             <img src="../logo-cropped.svg" style={{height:"60px"}}/>
            </a>
            <div className="ml-5 inline-flex lg:ml-0 lg:w-2/5 lg:justify-end">
              <a className="mr-5 hover:text-gray-900">
                <PhoneAndroidOutlinedIcon style={{ fontSize: "40px", color:"black" }} />
              </a>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
