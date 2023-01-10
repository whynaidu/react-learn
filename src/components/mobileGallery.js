import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import wallpaper1 from '../img/mobile/@wallpaperx_app_1051.jpg'
import wallpaper2 from '../img/mobile/@wallpaperx_app_1056.jpg'

import wallpaper3 from '../img/mobile/@wallpaperx_app_1057.jpg'
import wallpaper4 from '../img/mobile/@wallpaperx_app_1063.jpg'
import wallpaper5 from '../img/mobile/@wallpaperx_app_1066.jpg'

import wallpaper6 from '../img/mobile/@wallpaperx_app_1068.jpg'

export default class MobileGallery extends Component {
  render() {
    return (
        <div>
            <Container>
              <Row className='Mobilegallery'>
                     <Col xs={6} md={2}>
                        <Card.Img className='MobileWallpaper' variant="top" src={wallpaper1} />
                    </Col>
                    <Col xs={6} md={2}>
                        <Card.Img className='MobileWallpaper' variant="top" src={wallpaper2} />
                    </Col>
                    <Col xs={6} md={2}>
                        <Card.Img className='MobileWallpaper' variant="top" src={wallpaper3} />
            </Col>
            <Col xs={6} md={2}>
                        <Card.Img className='MobileWallpaper' variant="top" src={wallpaper4} />
            </Col>
            <Col xs={6} md={2}>
                        <Card.Img className='MobileWallpaper' variant="top" src={wallpaper5} />
            </Col>
            <Col xs={6} md={2}>
                        <Card.Img className='MobileWallpaper' variant="top" src={wallpaper6} />
                    </Col>
                    
                   
            
                </Row>
                


            </Container>
            
      </div>
    )
  }
}
