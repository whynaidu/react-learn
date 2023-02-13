import React, { Component } from 'react'
import ModalImage from "react-modal-image";


export default class MobileImage extends Component {
  render() {
    return (
      <div key={this.props.url}>
        <ModalImage
          className="duration-100 h-[332.53px] w-full rounded-lg object-cover ease-in hover:scale-103 hover:shadow-3xl md:h-[494px] lg:h-[759.81px]"
          small={`../uploads/${this.props.url}`}
          large={`../uploads/${this.props.url}`}
          hideZoom={true}
        />
      </div>
    );
  }
}
