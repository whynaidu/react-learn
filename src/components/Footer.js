import React, { Component } from 'react'
import { Row } from 'react-bootstrap'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <Row style={{ justifyContent: "center"}}>
          Made With &#10084;&#65039; by Vedant Naidu
        </Row>
      </div>
    );
  }
}
