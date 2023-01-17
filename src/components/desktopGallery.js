import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import axios from "axios";
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
                  <Link to={`large/${elem._id}`}>
                    <Card.Img
                      className="wallpaper"
                      onClick={() => navigate(elem._id)}
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
