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

// function withParams(Component) {
//   return (props) => <Component {...props} params={useParams()} />;
// }
class MobileView extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     Apidata: [],
  //   };
  // }
  // componentDidMount() {
  //   const id = "63c6430e1f0e4e2d2ec6d715";
  //   this.getData(id);
  // }

  // getData = async (id) => {
  //   const res = await axios.get(`http://localhost:3001/view/${id}`);
  //   const data = await res.data;
  //   this.setState({ Apidata: data });
  // };
  render() {
    return (
      <div>
        <Container className="main">
          <Row className="justify-content-center" style={{ padding: 0 }}>
            <img
              className="mobileView"
              src={`../../uploads/${this.props.params.wallpaper_url}`}
              alt="wallpaper"
            />
            <Row className="wallpaper_tool">
              <Link to="/mobile">
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

export default withRouter(MobileView);
