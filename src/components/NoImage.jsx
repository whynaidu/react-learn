import React, { Component } from 'react'
import NOImageFound from "../assets/undraw_images_re_0kll.svg" 

export default class NoImage extends Component {
  render() {
    return (
      <div>
        <div className="container flex h-[500px] items-center justify-center">
          <div>
            <img src={NOImageFound} className="h-50 w-8/12 lg:w-3/4 lg:h-2/4 lg:mt-20 mr-auto ml-auto" />
            <h1 className="text-3xl font-mono text-center font-medium mt-4"> No Image Found</h1>
          </div>
        </div>
      </div>
    );
  }
}
