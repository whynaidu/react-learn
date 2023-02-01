import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
// import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import withRouter from "./withRouter";
import axios from "axios";

class ImageView extends Component {
  constructor() {
    super();
    this.state = {
      views: "",
    };
  }
  componentDidMount() {
    this.updateViews();
  }
  updateViews = async () => {
    const getCount = await axios.post(
      `http://localhost:3001/view/${this.props.params.wallpaper_url}`
    );
    const data = getCount.data;
    this.setState({ views: data.count });
  };
  render() {
    return (
      <div>
        <Container className="mainDesktop">
          <Row className="justify-content-center" style={{ padding: 0 }}>
            <img
              className="imageView"
              src={`../../uploads/${this.props.params.wallpaper_url}`}
              alt="wallpaper"
            />
            <Row className="wallpaper_tool">
              <Link to="/">
                <Button variant="light" className="download" size="lg">
                  <FontAwesomeIcon icon={faClose} size="2x" />
                </Button>
              </Link>

              <a
                href={`../../uploads/${this.props.params.wallpaper_url}`}
                download
              >
                <Button variant="light" className="download" size="lg">
                  <FontAwesomeIcon icon={faDownload} size="2x" />
                </Button>
              </a>
            </Row>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(ImageView);
