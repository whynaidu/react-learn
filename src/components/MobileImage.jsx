import React, { Component } from 'react'
import ModalImage from "react-modal-image";


export default class MobileImage extends Component {
  render() {
    return (
      <div>
        <ModalImage
          className="w-full rounded-lg border-2 border-solid border-sky-500 object-cover"
          small="https://cdn.pixabay.com/photo/2023/01/27/04/53/muslim-7747745_960_720.png"
          large="https://cdn.pixabay.com/photo/2023/01/27/04/53/muslim-7747745_960_720.png"
          hideZoom={true}
        />
      </div>
    );
  }
}
