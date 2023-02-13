import React, { Component } from 'react'
import DesktopImage from "./DesktopImage";
import axios from 'axios';
import { Skeleton } from "@mui/material";
import Header from './Header';
import NoImage from './NoImage';




export default class Desktop extends Component {
  constructor() {
    super();
    this.state = {
      image: false,
      Apidata: [],
      dataPresent:"",
    };
  }

  componentDidMount() {
    setTimeout(async () => {
      const res = await axios.get("http://localhost:3001/");
      const data = await res.data;
      this.setState({ dataPresent: data.length },() => console.log(this.state.dataPresent));
      this.setState({ Apidata: data },()=> console.log(this.state.Apidata));
      this.setState({ image: true });
    }, 1000);
  }
  render() {
    return (
      <>
        <Header />
        {this.state.dataPresent === 0 ?
      <NoImage/>
  
    :
     <div className="p-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {this.state.Apidata.map((elem, key) => {
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
    
    
    }
      




      
      </>
    );
  }
}
