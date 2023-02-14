import React, { Component } from 'react'
import ModalImage from "react-modal-image";
import LazyLoad from "react-lazy-load";



export default class MobileImage extends Component {
  render() {
    return (
      <div key={this.props.url}>
        <LazyLoad
          threshold={0.9}
          offset={100}
        >
          <ModalImage
            className="h-[332.53px] w-full rounded-lg object-cover duration-100 ease-in hover:scale-103 hover:shadow-3xl md:h-[494px] lg:h-[759.81px]"
            small={`../uploads/${this.props.url}`}
            large={`../uploads/${this.props.url}`}
            hideZoom={true}
          />
        </LazyLoad>
      </div>
    );
  }
}
