import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import wallpaper1 from '../img/wallpaper_1673878437395.jpg'




export default class ImageView extends Component {
  render() {
    return (
        <div>
            <Container className='main'>
                
                <Row style={{padding:0}}>

                <img className="imageView" src={wallpaper1} alt="wallpaper"/>
                </Row>
            </Container>
        </div>
    )
  }
}
