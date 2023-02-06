import React, { Component } from 'react'
import ModalImage from "react-modal-image";


export default class Desktop extends Component {
  render() {
    return (
      <div className="p-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
         
          <ModalImage
            className="w-full rounded-lg border-2 border-solid border-sky-500 object-cover"
            small="https://cdn.pixabay.com/photo/2022/10/16/13/17/road-7525092_960_720.jpg"
            large="https://cdn.pixabay.com/photo/2022/10/16/13/17/road-7525092_960_720.jpg"
            hideZoom={true}
          />
        </div>
      </div>
    );
  }
}
