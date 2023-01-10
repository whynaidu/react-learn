import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile } from '@fortawesome/free-solid-svg-icons'
// import { faCloudMoon } from '@fortawesome/free-solid-svg-icons'

import Logo from '../img/logo.png';

export default class Header extends Component {
  render() {
      return (
        <div>
              
 <Row>
        <Col></Col>
                  <Col lg={3} className='logo'><img src={Logo} alt='logo'/></Col>
                  <Col className='tools'>
                      {/* <FontAwesomeIcon icon={faCloudMoon} size="3x" /> */}
                      

                      <FontAwesomeIcon icon={faMobile}  size="3x"/>
                      
                  </Col>
                          <Col sm={1} md={1} xs={0}></Col>


</Row>
             
        </div>
     
    )
  }
}
