import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import axios from "axios";
import Header from "./header";
 import { Link } from "react-router-dom";


export default class MobileGallery extends Component {
  constructor() {
    super();
    this.state = {
      Apidata: [],
    };
  }

  componentDidMount() {
    const getData = async () => {
      const res = await axios.get("http://localhost:3001/mobile");
      const data = await res.data;
      console.log(res.data);
      this.setState({ Apidata: data });
    };
    getData();
  }
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Row className="Mobilegallery">
            {this.state.Apidata.map((elem, key) => {
              return (
                <Col xs={4} md={2}>
                  <Link to={`../mobileview/${elem.wallpaper_url}`}>
                    <Card.Img
                      className="MobileWallpaper"
                      variant="top"
                      src={`../../uploads/${elem.wallpaper_url}`}
                    />
                  </Link>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}
