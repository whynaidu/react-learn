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
// import Footer from "./Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import withNavigateHook from "./withNavigate";



class AdminLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adminemail: "",
      password: "",
      token: "",
      isLoggedIn: false,
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

  componentDidMount() {
    this.setState({
      isLoggedIn: false,
    });
  }
  handleButtonClicked = async (click) => {
    click.preventDefault();

    axios
      .post(
        `https://wallly.onrender.com/login`,
        {
          adminemail: this.state.adminemail,
          password: this.state.password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success(res.data);

        // const data = res.json();
        console.log(res.data);
        // if (res.status === 400 || !data) {
        //   window.alert("invalid login");
        // } else {
        //   window.alert("success");
        //   navigation("/dashboard");
        // }
        this.setState({ isLoggedIn: true });
        this.setState({ token: res.data.token });
        window.localStorage.setItem("token", res.data.token);

        // if (this.state.token) {
        //   this.setState({ isLoggedIn: false });
        // } else {
        //   this.setState({ isLoggedIn: true });
        // }

        // if (this.state.isLoggedIn === true) {
        //   // redirect to dashboard page if user is logged in
        //   this.props.navigation("/dashboard");
        // } else {
        //   // do not redirect if user is not logged in
        // }
      })
      .catch((err) => {
        toast.error(err);
      });
  }; 

  render() {
  
    
      if (this.state.isLoggedIn) {
        return <Navigate to="/dashboard" state={this.state.isLoggedIn} />;
      }
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
            <img className="logo" src={Logo} alt=""/>
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
                  <Form
                    style={{ marginTop: "40px" }}
                    onSubmit={this.handleButtonClicked}
                  >
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
                        type="submit"
                        style={{
                          backgroundColor: "#a50df1",
                          border: 0,
                          width: "100%",
                        }}
                        size="lg"
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
        {/* <Footer /> */}
      </div>
    );
  }
}
export default AdminLogin;



//dont redirect if user not logged in by checking localstorage for token and redirect to dashboard if token is present reactjs class component