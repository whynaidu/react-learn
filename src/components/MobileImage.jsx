import React, { Component } from 'react'
import ModalImage from "react-modal-image";


export default class MobileImage extends Component {
  render() {
    return (
      <div key={this.props.url}>
        <ModalImage
          className="w-full md:h-[494px] lg:h-[759.81px] h-[332.53px] rounded-lg border-2 border-solid border-sky-500 object-cover"
          small={`../uploads/${this.props.url}`}
          large={`../uploads/${this.props.url}`}
          hideZoom={true}
        />
      </div>
    );
  }
}
