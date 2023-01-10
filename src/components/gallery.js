import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import wallpaper1 from '../img/2.jpg'
import wallpaper2 from '../img/OIH9JQ0-01.jpeg'

import wallpaper3 from '../img/jfl_cc0_5_09262018_DESKTOP.jpeg'

export default class Gallery extends Component {
  render() {
    return (
        <div>
            <Container>
              <Row className='gallery'>
                     <Col xs={6} md={4}>
                        <Card.Img className='wallpaper' variant="top" src={wallpaper1} />
                    </Col>
                    <Col xs={6} md={4}>
                        <Card.Img className='wallpaper' variant="top" src={wallpaper2} />
                    </Col>
                    <Col xs={6} md={4}>
                        <Card.Img className='wallpaper' variant="top" src={wallpaper3} />
                    </Col>
                   
            
                </Row>
                


            </Container>
            
      </div>
    )
  }
}
