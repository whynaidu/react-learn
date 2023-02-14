import React, { Component } from 'react'
import ModalImage from "react-modal-image";


export default class DesktopImage extends Component {
  render() {
    return (
      <div>
        <ModalImage
          className="h-64 w-full rounded-lg  object-cover duration-100 ease-in hover:scale-103 hover:shadow-3xl"
          small={`https://wallly.onrender.com/uploads/${this.props.url}`}
          large={`https://wallly.onrender.com/uploads/${this.props.url}`}
          hideZoom={true}
        />
        
      </div>
    );
  }
}
