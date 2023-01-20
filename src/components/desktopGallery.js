import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import axios from "axios";
import Header from "./header";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
 import { Link } from "react-router-dom";

export default class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      Apidata: [],
    };
  }

  componentDidMount() {
    const getData = async () => {
      const res = await axios.get("http://localhost:3001/");
      const data = await res.data;
      this.setState({ Apidata: data });
    };
    getData();
  }

  render() {
    return (
      <div>
    
        <Container>
          <Row className="gallery">
            {this.state.Apidata.map((elem, key) => {
              return (
                <Col xs={6} md={4} key={key}>
                  <Link to={`view/${elem.wallpaper_url}`}>
                    <Card.Img
                      className="wallpaper"
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
