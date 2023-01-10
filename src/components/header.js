import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../img/logo.png';

export default class Header extends Component {
  render() {
      return (
        <div>
              
 <Row>
        <Col></Col>
                  <Col><img src={Logo}/></Col>
                          <Col></Col>

              </Row>
             
        </div>
     
    )
  }
}
