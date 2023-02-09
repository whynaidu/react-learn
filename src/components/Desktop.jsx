import React, { Component } from 'react'
import DesktopImage from "./DesktopImage";
import axios from 'axios';
import { Skeleton } from "@mui/material";
import Header from './Header';




export default class Desktop extends Component {
  constructor() {
    super();
    this.state = {
      image: false,

      Apidata: [],
    };
  }

  componentDidMount() {
    setTimeout(async () => {
      const res = await axios.get("http://localhost:3001/");
      const data = await res.data;
      console.log(data.length);
      this.setState({ Apidata: data },()=> console.log(this.state.Apidata));
      this.setState({ image: true });
    }, 1000);
  }
  render() {
    return (
       <>
        <Header />
      <div className="p-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {this.state.Apidata.map((elem, key) => {
            return <DesktopImage url={elem.wallpaper_url} />;
          })}

          {!this.state.image &&
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12].map(() => (
             <Skeleton
                  sx={{ marginBottom: "24px" }}
                  variant="rounded"
                  animation="wave"
                  height={240}
                />
            ))}
        </div>
        </div>
        </>
    );
  }
}
