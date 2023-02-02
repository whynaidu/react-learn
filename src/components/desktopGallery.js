import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from "axios";
import Header from "./header";
import { Link } from "react-router-dom";
import { Skeleton } from "@mui/material";

export default class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      image: false,

      Apidata: [],
    };
  }

  componentDidMount() {
    setTimeout(async () => {
      const res = await axios.get("http://localhost:3001/");
      const data = await res.data;
      console.log(data.length)
      this.setState({ Apidata: data });
      this.setState({ image: true });
    }, 800);
  }
  // componentDidUpdate(prevState) {
  //   if (prevState.Apidata !== this.state.Apidata) {
  //     axios.get("http://localhost:3001/")
  //       .then(res => { this.setState({ Apidata: res.data }).catch(err => { console.log(err) }) })
  //   }
  // }
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Row className="gallery d-flex flex-wrap">
            {this.state.Apidata.map((elem, key) => {
              return (
                <Col md={6} lg={4}>
                  <Link to={`view/${elem.wallpaper_url}`}>
                    <Card.Img
                      key={key._id}
                      className="wallpaper"
                      variant="top"
                      src={`../../uploads/${elem.wallpaper_url}`}
                      loading="lazy"
                    />
                  </Link>
                </Col>
              );
            })}

            {!this.state.image &&
              [1, 2, 3, 4, 5,6,7,8,9,11,12].map(() => (
                  <Col md={6} lg={4}>
                    <Skeleton sx={{marginBottom:"24px"}} variant="rounded" animation="wave" height={240} />
                  </Col>
              ))}
          </Row>

         
        </Container>
      </div>
    );
  }
}
