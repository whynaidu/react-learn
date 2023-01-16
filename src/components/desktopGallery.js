import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import wallpaper1 from '../img/2.jpg'
import wallpaper2 from '../img/OIH9JQ0-01.jpeg'
import axios from "axios"

import wallpaper3 from '../img/jfl_cc0_5_09262018_DESKTOP.jpeg'
import { faHourglass1 } from '@fortawesome/free-solid-svg-icons';

export default class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      Apidata:[]
    }
  }

  componentDidMount () { 
    const getData = async() => {
      const res = await axios.get("http://localhost:3001/")
      const data = await res.data;
      this.setState({ Apidata: data })
    }
    getData();
   }
  render() {
    return (
        <div>
            <Container>
          <Row className='gallery'>
            {
              this.state.Apidata.map((elem, key) => {
                return (
                  <Col xs={6} md={4} key={key}>
                        <Card.Img className='wallpaper' variant="top" src={`./uploads/${elem.wallpaper_url}`} />
                    </Col>
                )
              })
            }
            
                </Row>
                


            </Container>
            
      </div>
    )
  }
}
