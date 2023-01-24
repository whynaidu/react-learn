import React, { Component } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import Logo from "../assets/logo.png";
import LogoImage from "../assets/loginImage.png";
import LoginAvatar from "../assets/loginAvatar.png";
import "../App.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useNavigate} from "react-router-dom"



export default class AdminLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adminemail: "",
      password: "",
      token: "",
    };
  }

  handleEmailChanged = (event) => {
    this.setState({
      adminemail: event.target.value,
    });
  };
  handlePasswordChanged = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClicked = (click) => {
    click.preventDefault();

    axios
      .post(
        `http://localhost:3001/login`,
        {
          adminemail: this.state.adminemail,
          password: this.state.password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success(res.data);
        console.log(res.data.token);
        window.localStorage.setItem("token", res.data.token);
        this.setState({token: res.data.token});

        let navigate = useNavigate();
        navigate("/dashboard");
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  render() {
    return (
      <div>
        <Container className="x">
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
          <Row style={{ justifyContent: "center", height: "80px" }}>
            <img className="logo" src={Logo} />
          </Row>
          <Card className="loginCard">
            <Row>
              <Col xs={6}>
                <img className="loginImage" src={LogoImage} />
              </Col>
              <div className="divider"></div>
              <Col className="loginFormColumn" xs={5}>
                <Row className="loginForm">
                  <img className="loginAvatar" src={LoginAvatar} />
                  <h1>Admin Login</h1>
                  <Form style={{ marginTop: "40px" }}>
                    <Form.Group>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                      >
                        <Form.Control
                          type="email"
                          name="adminemail"
                          placeholder="name@example.com"
                          onChange={this.handleEmailChanged}
                        />
                      </FloatingLabel>
                    </Form.Group>
                    <Form.Group>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Password"
                        className="mb-3"
                      >
                        <Form.Control
                          type="password"
                          onChange={this.handlePasswordChanged}
                          placeholder="name@.com"
                        />
                      </FloatingLabel>
                    </Form.Group>
                    <Form.Group>
                      <Button
                        style={{
                          backgroundColor: "#a50df1",
                          border: 0,
                          width: "100%",
                        }}
                        size="lg"
                        onClick={this.handleButtonClicked}
                      >
                        Login
                      </Button>
                    </Form.Group>
                    <Row style={{ justifyContent: "center" }}>
                      <Link style={{ textDecoration: "none" }}>
                        Forgot Password
                      </Link>
                      {/* <Col>
                        <Link>Forgot Password</Link>Forgot Password
                      </Col>
                      <Col>Forgot Password</Col> */}
                    </Row>
                  </Form>
                </Row>
              </Col>
            </Row>
          </Card>
        </Container>
        <Footer />
      </div>
    );
  }
}
