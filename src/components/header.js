import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import withRouter from "./withRouter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

// import { faCloudMoon } from '@fortawesome/free-solid-svg-icons'

import Logo from "../assets/logo.png";
import axios from "axios";

class Header extends Component {
  // renderHeader = (path) => {
  //   switch (path) {
  //     case "loader":
  //       return (
  //         <FontAwesomeIcon
  //           for=""
  //           style={{ color: "black", margin: 10 }}
  //           icon={faCirclePlus}
  //           size="3x"
  //         />
  //       );

  //     default:
  //       return (
  //         <FontAwesomeIcon
  //           for="mobile"
  //           style={{ color: "black", margin: 10 }}
  //           icon={faMobile}
  //           size="3x"
  //         />
  //       );
  //   }
  // };
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      category: "",
      wallls: "",
      showModal: false,
    };
  }

  handleInputChanged(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleButtonClicked = (click) => {
    click.preventDefault();
    const formData = new FormData();
    formData.append("wallls", this.state.wallls);
    formData.append("name", this.state.name);
    formData.append("category", this.state.category);

    axios
      .post(`http://localhost:3001/upload/`, formData)
      .then((res) => {
        toast.success(res.data);
        console.log(res);
      })
      .catch((err) => {
        toast.error(err);
      });
    this.closeModal();
  };

  handleradio = (e) => {
    this.setState(
      {
        category: e.target.value,
      },
      () => console.log(this.state.category)
    );
  };

  handleFile = (click) => {
    this.setState({
      wallls: click.target.files[0],
    });
  };

  // handleFile = (e) => {
  //   this.setState({
  //     fileName: e.target.files[0],
  //   });
  //   console.log(this.state.fileName[0]);
  // };

  openModal = () => this.setState({ showModal: true });

  closeModal = () =>
    this.setState({ showModal: false }, () => {
      this.setState({
        name: "",
        category: "",
        wallss: "",
      });
    });

  render() {
    return (
      <div>
        <div className="form-group">
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="dark"
          />
        </div>
        <Row>
          <Col></Col>
          <Col lg={3} className="logo">
            <img src={Logo} alt="logo" />
          </Col>
          <Col className="tools">
            <FontAwesomeIcon
              style={{ color: "black", margin: 10, cursor: "pointer" }}
              onClick={this.openModal}
              icon={faCirclePlus}
              size="3x"
            />

            <Link to="/mobile">
              <FontAwesomeIcon
                style={{ color: "black", margin: 10, cursor: "pointer" }}
                onClick={this.openModal}
                icon={faMobile}
                size="3x"
              />
            </Link>
          </Col>
          <Col sm={1} md={1} xs={0}></Col>

          <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={this.state.showModal}
            onHide={this.closeModal}
          >
            <Modal.Header closeButton>
              <Modal.Title>Upload Wallpaper</Modal.Title>
            </Modal.Header>
            <Form encType="mutipart/form-data">
              <Modal.Body>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label column sm={3}>
                    Name
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      value={this.state.name}
                      onChange={this.handleInputChanged.bind(this)}
                      type="text"
                      name="name"
                      placeholder="Name of Wallpaper"
                      required
                    />
                  </Col>
                </Form.Group>

                <fieldset>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label as="legend" column sm={3}>
                      Category
                    </Form.Label>
                    <Col
                      sm={9}
                      style={{ display: "flex" }}
                      onChange={this.handleradio}
                    >
                      <Form.Check
                        type="radio"
                        label="Mobile"
                        name="category"
                        value="mobile"
                        id="formHorizontalRadios1"
                      />
                      <Form.Check
                        type="radio"
                        label="Desktop"
                        name="category"
                        value="desktop"
                        id="formHorizontalRadios2"
                      />
                    </Col>
                  </Form.Group>
                </fieldset>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalEmail"
                >
                  <Form.Label column sm={3}>
                    Select file
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      required
                      type="file"
                      name="file"
                      onChange={this.handleFile}
                    />
                  </Col>
                </Form.Group>
              </Modal.Body>
              <Modal.Footer style={{ justifyContent: "center" }}>
                <Button variant="secondary" onClick={this.closeModal}>
                  Close
                </Button>
                <Button
                  type="submit"
                  variant="dark"
                  onClick={this.handleButtonClicked}
                >
                  Upload
                </Button>
              </Modal.Footer>
            </Form>
          </Modal>
        </Row>
      </div>
    );
  }
}

export default withRouter(Header);
