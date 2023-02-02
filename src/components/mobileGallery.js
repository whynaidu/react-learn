import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import axios from "axios";
import Header from "./header";
import { Link } from "react-router-dom";
import { Skeleton } from "@mui/material";



export default class MobileGallery extends Component {
  constructor() {
    super();
    this.state = {
      image: false,

      Apidata: [],
    };
  }

  componentDidMount() {
      setTimeout(async () => {
      const res = await axios.get("https://wallly.onrender.com/mobile");
      const data = await res.data;
      console.log(res.data);
      this.setState({ Apidata: data });
      this.setState({ image: true });

    },1000)
  }
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Row className="Mobilegallery">
            {this.state.Apidata.map((elem, key) => {
              return (
                <Col md={6} lg={3}>
                  <Link to={`../mobileview/${elem.wallpaper_url}`}>
                    <Card.Img
                      className="MobileWallpaper"
                      variant="top"
                      src={`../../uploads/${elem.wallpaper_url}`}
                      loading="lazy"
                    />
                  </Link>
                </Col>
              );
            })}
            {!this.state.image &&
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12].map(() => (
                <Col md={6} lg={3}>
                  <Skeleton
                    sx={{ marginBottom: "24px" }}
                    variant="rounded"
                    animation="wave"
                    height={500}
                  />
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    );
  }
}
