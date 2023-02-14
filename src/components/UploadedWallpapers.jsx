import React, { Component } from "react";
import StayPrimaryPortraitIcon from "@mui/icons-material/StayPrimaryPortrait";
import ComputerIcon from "@mui/icons-material/Computer";
import ModalImage from "react-modal-image";
import { Skeleton } from "@mui/material";
import axios from "axios";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default class UploadedWallpapers extends Component {
  constructor() {
    super();
    this.state = {
      image: false,
      mobileLength: "",
      desktopLength: "",
      mobileData: [],
      desktopData: [],
      deleted: false,
      status:""
    };
  }

  componentDidMount() {
    const getMobile = async () => {
      const res = await axios.get("http://localhost:3001/mobile");
      const data = await res.data;
      this.setState({ mobileLength: data.length }
      );
      this.setState({ mobileData: data });
      this.setState({ image: true });
      this.setState({ uploaded: "" }, () => console.log(this.state.uploaded));

    };
    getMobile();
    const getDesktop = async () => {
      const res = await axios.get("http://localhost:3001/");
      const data = await res.data;
      this.setState({ desktopLength: data.length });

      this.setState({ desktopData: data });
      this.setState({ image: true });
      this.setState({uploaded:""},() => console.log(this.state.uploaded))
    };
    getDesktop();
  }

  deleteClick = (objid) => {
    axios
      .post(`http://localhost:3001/delete/${objid}`)
      .then((res) => {
        this.setState({ deleted: true }, () => console.log(this.state.deleted));
      })
      .catch((err) => {
        console.log(err);
      });
  };


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

    if (prevState.deleted != this.state.deleted) {
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
      
      this.setState({
        deleted:false
      })
      
    }
  }

  render() {
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
            className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
            id="desktop"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {this.state.desktopData.map((elem, key) => {
                return (
                  <div key={key}>
                    <ModalImage
                      className="h-64 w-full rounded-lg border-2 border-solid"
                      small={`../uploads/${elem.wallpaper_url}`}
                      large={`../uploads/${elem.wallpaper_url}`}
                      hideZoom={true}
                    />
                    <button
                      className="relative left-[85%] top-[-17%] rounded-full border bg-white px-2 py-2 text-sm font-semibold text-red-600 hover:border-transparent hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
                      onClick={() => this.deleteClick(elem._id)}
                    >
                      <DeleteForeverIcon />
                    </button>
                  </div>
                );
              })}

              {!this.state.image &&
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12].map((key) => (
                  <Skeleton
                    key={key}
                    sx={{ marginBottom: "10px" }}
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
                return (
                  <div key={key}>
                    <ModalImage
                      className="h-[332.53px] w-full rounded-lg border-2object-cover md:h-[494px] lg:h-[759.81px]"
                      small={`../uploads/${elem.wallpaper_url}`}
                      large={`../uploads/${elem.wallpaper_url}`}
                      hideZoom={true}
                    />
                    <button
                      className="relative left-[85%] top-[-7%] rounded-full border bg-white px-2 py-2 text-sm font-semibold text-red-600 hover:border-transparent hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
                      onClick={() => this.deleteClick(elem._id)}
                    >
                      <DeleteForeverIcon />
                    </button>
                  </div>
                );
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
