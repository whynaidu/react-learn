import React, { Component } from 'react'
import ModalImage from "react-modal-image";


export default class DesktopImage extends Component {
  render() {
    return (
      <div>
        <ModalImage
          className="w-full h-64 rounded-lg border-2 border-solid border-sky-500 object-cover"
          small={`../uploads/${this.props.url}`}
          large={`../uploads/${this.props.url}`}
          hideZoom={true}
        />
      </div>
    );
  }
}
