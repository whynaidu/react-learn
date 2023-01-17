import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router";

class ImageView extends Component {
  constructor() {
    super();
    this.state = {
      Apidata: [],
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.getData(id);
  }

  getData = async (id) => {
    const res = await axios.get(`http://localhost:3001/view/${id}`);
    const data = await res.data;
    this.setState({ Apidata: data });
  };
  render() {
    return (
      <div>
        <Container className="main">
          <Row style={{ padding: 0 }}>
            {this.state.Apidata.map((elem, key) => {
              return (
                <>
                  <img
                    key={key}
                    className="imageView"
                    src={`../../uploads/${elem.wallpaper_url}`}
                    alt="wallpaper"
                  />
                </>
              );
            })}
            <Row className="justify-content-center wallpaper_tool">
              <Button variant="light" className="download" size="lg">
                <FontAwesomeIcon icon={faClose} size="2x" />
              </Button>

              <Button variant="light" className="download" size="lg">
                <FontAwesomeIcon icon={faDownload} size="2x" />
              </Button>
            </Row>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(ImageView);
