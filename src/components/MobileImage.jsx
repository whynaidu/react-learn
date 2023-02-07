import React, { Component } from 'react'
import ModalImage from "react-modal-image";


export default class MobileImage extends Component {
  render() {
    return (
      <div>
        <ModalImage
          className="w-full rounded-lg border-2 border-solid border-sky-500 object-cover"
          key={this.props.id}
          small={`../uploads/${this.props.url}`}
          large={`../uploads/${this.props.url}`}
          hideZoom={true}
        />
      </div>
    );
  }
}
