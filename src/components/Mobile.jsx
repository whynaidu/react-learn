import React, { Component } from "react";
import ModalImage from "react-modal-image";


export default class Mobile extends Component {
  render() {
    return (
      <div className="p-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ModalImage
            className="w-full rounded-lg border-2 border-solid border-sky-500 object-cover"
            small="https://cdn.pixabay.com/photo/2023/01/27/04/53/muslim-7747745_960_720.png"
            large="https://cdn.pixabay.com/photo/2023/01/27/04/53/muslim-7747745_960_720.png"
            hideZoom={true}
          />
          <ModalImage
            className="w-full rounded-lg border-2 border-solid border-sky-500 object-cover"
            small="https://cdn.pixabay.com/photo/2023/01/27/04/53/muslim-7747745_960_720.png"
            large="https://cdn.pixabay.com/photo/2023/01/27/04/53/muslim-7747745_960_720.png"
            hideZoom={true}
          />
          <ModalImage
            className="w-full rounded-lg border-2 border-solid border-sky-500 object-cover"
            small="https://cdn.pixabay.com/photo/2023/01/27/04/53/muslim-7747745_960_720.png"
            large="https://cdn.pixabay.com/photo/2023/01/27/04/53/muslim-7747745_960_720.png"
            hideZoom={true}
          />
          <ModalImage
            className="w-full rounded-lg border-2 border-solid border-sky-500 object-cover"
            small="https://cdn.pixabay.com/photo/2023/01/27/04/53/muslim-7747745_960_720.png"
            large="https://cdn.pixabay.com/photo/2023/01/27/04/53/muslim-7747745_960_720.png"
            hideZoom={true}
          />
        </div>
      </div>
    );
  }
}
