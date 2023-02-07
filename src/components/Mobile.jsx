import React, { Component } from "react";
import MobileImage from "./MobileImage";
import axios from "axios";
import { Skeleton } from "@mui/material";



export default class Mobile extends Component {
  constructor() {
    super();
    this.state = {
      image: false,
      Apidata: [],
    };
  }

  componentDidMount() {
    setTimeout(async () => {
      const res = await axios.get("http://localhost:3001/mobile");
      const data = await res.data;
      console.log(res.data);
      this.setState({ Apidata: data });
      this.setState({ image: true });
    }, 1000);
  }
  render() {
    return (
      <div className="p-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {this.state.Apidata.map((elem,id) => {
            return <MobileImage url={elem.wallpaper_url}
              id={elem._id} />;
          })}
          {!this.state.image &&
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12].map(() => (
              <Skeleton
                sx={{ marginBottom: "24px" }}
                variant="rounded"
                animation="wave"
                height={500}
              />
            ))}
        </div>
      </div>
    );
  }
}
