import React, { Component } from 'react'
import ModalImage from "react-modal-image";


export default class DesktopImage extends Component {
  render() {
    return (
      <div>
        <ModalImage
          className="w-full rounded-lg border-2 border-solid border-sky-500 object-cover"
          small="https://cdn.pixabay.com/photo/2022/10/16/13/17/road-7525092_960_720.jpg"
          large="https://cdn.pixabay.com/photo/2022/10/16/13/17/road-7525092_960_720.jpg"
          hideZoom={true}
        />
      </div>
    );
  }
}
