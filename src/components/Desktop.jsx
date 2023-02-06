import React, { Component } from 'react'
import DesktopImage from "./DesktopImage";
import  axios  from 'axios';



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
      this.setState({ Apidata: data });
      this.setState({ image: true });
    }, 100);
  }
  render() {
    return (
      <div className="p-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {this.state.Apidata.map((elem, key) => {
            return (

              <DesktopImage
                              
              />
            )
          })
          }
  
        </div>
      </div>
    );
  }
}
