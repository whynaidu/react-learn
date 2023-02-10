import React, { Component } from "react";
import StayPrimaryPortraitIcon from "@mui/icons-material/StayPrimaryPortrait";
import ComputerIcon from "@mui/icons-material/Computer";
import Desktop from "./Desktop";
import { Skeleton } from "@mui/material";
import axios from "axios";

import MobileImage from "./MobileImage";
import DesktopImage from "./DesktopImage";

export default class UploadedWallpapers extends Component {
  constructor() {
    super();
    this.state = {
      image: false,
      mobileLength: "",
      desktopLength: "",
      mobileData: [],
      desktopData: [],
    };
    }

  componentDidMount() {
    const getMobile = async () => {
      const res = await axios.get("http://localhost:3001/mobile");
      const data = await res.data;
      this.setState({mobileLength:data.length},() => console.log(this.state.mobileLength));
      this.setState({ mobileData: data });
      this.setState({ image: true });
    };
    getMobile();
    const getDesktop = async () => {
      const res = await axios.get("http://localhost:3001/");
        const data = await res.data;
              this.setState({ desktopLength: data.length }, () =>
                console.log(this.state.desktopLength)
              );

      this.setState({ desktopData: data });
      this.setState({ image: true });
    };
    getDesktop();
  }


  componentDidUpdate(prevProps, prevState) {
    
    if (prevProps.status != this.props.status) {
      const getMobile = async () => {
        const res = await axios.get("http://localhost:3001/mobile");
        const data = await res.data;
        this.setState({ mobileLength: data.length }, () =>
          console.log(this.state.mobileLength)
        );
        this.setState({ mobileData: data });
        this.setState({ image: true });
      };
      getMobile();


      
      const getDesktop = async () => {
        const res = await axios.get("http://localhost:3001/");
        const data = await res.data;
        this.setState({ desktopLength: data.length }, () =>
          console.log(this.state.desktopLength)
        );

        this.setState({ desktopData: data });
        this.setState({ image: true });
      };
      getDesktop();
      
    }
  }
  render() {
                    {
                      console.log(this.props.status);
                    }

    return (

      <div>
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul
            className="-mb-px flex  justify-center text-center text-sm font-medium"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li className="mr-2" role="presentation">
              <ComputerIcon style={{ fontSize: "20px", color: "black" }} />
              <button
                className="inline-block rounded-t-lg border-b-2 p-4"
                id="profile-tab"
                data-tabs-target="#desktop"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Desktop
                <span className="ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-blue-200 text-xs font-semibold text-blue-800">
                  {this.state.desktopLength}
                </span>
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <StayPrimaryPortraitIcon
                style={{ fontSize: "20px", color: "black" }}
              />
              <button
                className="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                id="dashboard-tab"
                data-tabs-target="#mobile"
                type="button"
                role="tab"
                aria-controls="dashboard"
                aria-selected="false"
              >
                Mobile
                <span className="ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-blue-200 text-xs font-semibold text-blue-800">
                  {this.state.mobileLength}
                </span>
              </button>
            </li>
          </ul>
        </div>
        <div id="myTabContent">
          <div
            className="hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
            id="desktop"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {this.state.desktopData.map((elem, key) => {
                return <DesktopImage key={key} url={elem.wallpaper_url} />;
              })}

              {!this.state.image &&
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12].map((key) => (
                  <Skeleton
                    key={key}
                    sx={{ marginBottom: "24px" }}
                    variant="rounded"
                    animation="wave"
                    height={240}
                  />
                ))}
            </div>
          </div>
          <div
            className="hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
            id="mobile"
            role="tabpanel"
            aria-labelledby="dashboard-tab"
          >
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {this.state.mobileData.map((elem, key) => {
                return <MobileImage key={key} url={elem.wallpaper_url} />;
              })}
              {!this.state.image &&
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12].map((key) => (
                  <Skeleton
                    key={key}
                    sx={{ marginBottom: "24px" }}
                    variant="rounded"
                    animation="wave"
                    height={500}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
