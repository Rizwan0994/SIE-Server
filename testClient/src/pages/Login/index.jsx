import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Header from "../../Compunents/Header/Header";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import Footer from "../../Compunents/HomeSections/Footer/Footer";
import OR from "../../images/OR.svg";
import { GoogleLogin } from "react-google-login";
import { GoogleLogout } from "react-google-login";
import { LoginSocialFacebook } from "reactjs-social-login";
import { LoginSocialGoogle } from "reactjs-social-login";
import googleicon from "../../images/googleicon.svg";
import { gapi } from "gapi-script";
import fbicon from "../../images/fbicon.svg";
import jwt_decode from "jwt-decode";
import {useNavigate} from "react-router-dom"

const SocialBtnStyle = {
  backgroundColor: "#FFFFFF",
  color: "#666666",
   width: "-webkit-fill-available",
   borderStyle: "solid", 
   borderWidth: "1px", 
   borderColor: "#BEBEBE",
   borderRadius: "10px",
}

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const SCOPES = "profile email https://www.googleapis.com/auth/calendar";

  const [data, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://sie-server.onrender.com/api/users/login";
      const response = await axios.post(url, data);
      const { refresh, access, user_id, user_type, username, profile_picture } =
        response.data;
      //   console.log(response.data)
      localStorage.setItem("refreshToken", refresh);
      localStorage.setItem("accessToken", access);
      localStorage.setItem("owner", user_id);
      console.log( "user_id" + user_id)
      localStorage.setItem("user", user_type);
      localStorage.setItem(
        "pro_pic",
        `http://127.0.0.1:8000/${profile_picture}`
      );
      localStorage.setItem("username", username);

      // Redirect or perform other actions after successful login
   
      navigate('/profile')
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.detail || "An error occurred");
      }
    }
  };

  const responseGoogle = (response) => {
    // Handle the Google login response here
    if (response.profileObj) {
      // Successful login
      console.log("Successful login:", response.profileObj);
    } else {
      // Failed login
      console.log("Login failed:", response);
    }
  };

  useEffect(() => {
    gapi.load("auth2", () => {
      gapi.auth2.init({
        client_id:
          "704993920931-fabqceknntid8c9uge6mgupu1p3r9mjj.apps.googleusercontent.com",
      });
    });
  }, []);

  const handleGoogleLogin = () => {
    // Trigger Google OAuth using gapi
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signIn().then((googleUser) => {
      // Handle the Google OAuth response here
      console.log("Google user:",googleUser);
      console.log(googleUser.xc.access_token);
      
      localStorage.setItem("accessToken", googleUser.xc.access_token);
      // localStorage.setItem("owner", user_id);
      // localStorage.setItem("user", user_type);
      localStorage.setItem("owner",  googleUser.wt.NT);
      localStorage.setItem(
        "username",googleUser.wt.Ad
        
      );
      localStorage.setItem("pro_pic",googleUser.wt.hK );
      // as a guest
      localStorage.setItem("user", "Guest");
    
      navigate('/profile')

    });
    
  };

  const handleFaceBookLogin = (response) => {
    // Trigger Google OAuth using gapi
    console.log("FacebookUser user:",);

      
      localStorage.setItem("accessToken",response.data.accessToken);
      // localStorage.setItem("owner", user_id);
      // localStorage.setItem("user", user_type);
      localStorage.setItem(
        "username",response.data.name
        
      );
      localStorage.setItem("pro_pic",response.data.picture.data.url );
      // as a guest
      localStorage.setItem("user", "Guest");
      localStorage.setItem("owner",  response.data.userID);
      navigate('/profile')
    
  };

  const handleGoogleLogout = () => {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      // User has been signed out from Google
      console.log("User has been signed out");
      // You can perform additional actions here, such as updating the UI
    });
  };

  const onSucces = () => {
    console.log("logout successfully");
  };

  return (
    <div>
      {/* <Header/> */}

      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            {/* <div className="border border-3 border-primary"></div> */}
            <Card className="shadow">
              <Card.Body className="p-0">
                <h2
                  className="fw-bold mb-2  text-center mt-3"
                  style={{
                    fontWeight: "600",
                    fontFamily: "Open Sans",
                    fontSize: "20px",
                  }}
                >
                  Login
                </h2>
                {/* <div className="border border-1 border"></div>  */}
                <hr />
                <div className="mb-3 mt-md-4" style={{ padding: "5% 8%" }}>
                  <h2
                    className="fw-bold mb-4  text-center"
                    style={{
                      fontWeight: "700",
                      fontFamily: "Playfair Display",
                    }}
                  >
                    Welcome back!
                  </h2>

                  <div className="mb-3">
                    <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="email" className="mt-2">
                       
                        <Form.Control
                          type="email"
                          name="email"
                          value={data.email}
                          onChange={handleChange}
                          placeholder="Email"
                          required
                        />
                      </Form.Group>

                      <Form.Group controlId="password" className="mt-3">
                     
                        <Form.Control
                          type="password"
                          name="password"
                          value={data.password}
                          onChange={handleChange}
                          placeholder="Password"
                          required
                        />
                      </Form.Group>
                      <div className="d-grid">
                        <Button className="mt-4 mb-1"
                          variant=""
                          style={{
                            backgroundColor: "#BEBEBE",
                            color: "#FFFFFF",
                          }}
                          type="submit"
                        >
                          Login
                        </Button>
                      </div>
                    </Form>
                    <Link
                      to="/forgotpass"
                      style={{ alignSelf: "flex-start", color: "#00BFFF" }}
                    >
                      <p className="text-center" style={{ padding: "0 15px" }}>
                        Forgot Password ?
                      </p>
                    </Link>
                    {/* <img src={OR} alt="" /> */}
                    <span className="d-flex justify-content-around align-items-center">
                      <hr style={{ width: "40%" }} />
                      OR
                      <hr style={{ width: "40%" }} />
                    </span>

                    <div>
                      <LoginSocialFacebook
                        appId="391961612190816"
                        onResolve={(response) => {
                          console.log(response); 
                          handleFaceBookLogin(response)
                        }}
                        onReject={(error) => {
                          console.log(error);
                         
                        }}
                      >
                        <button
                          className="mt-4 mb-4"
                          style={SocialBtnStyle}
                        >
                          {" "}
                          <img src={fbicon} alt="" /> Continue with Facebook
                        </button>
                      </LoginSocialFacebook>
                    </div>

                    <GoogleLogin
                      clientId="704993920931-fabqceknntid8c9uge6mgupu1p3r9mjj.apps.googleusercontent.com"
                      render={(renderProps) => (
                        <button
                          style={SocialBtnStyle}
                          onClick={handleGoogleLogin}
                        >
                          {" "}
                          <img src={googleicon} alt="" /> Continue with Google
                        </button>
                      )}
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={"single_host_origin"}
                    />

                    {/* <GoogleLogout
                      clientId="704993920931-fabqceknntid8c9uge6mgupu1p3r9mjj.apps.googleusercontent.com"
                      render={(renderProps) => (
                        <button
                        style={SocialBtnStyle}
                          onClick={handleGoogleLogout}
                        >
                          {" "}
                          <img src={googleicon} alt="" /> Continue Logout with
                          Google
                        </button>
                      )}
                      onLogoutSuccess={onSucces}
                      // onFailure={responseGoogle}
                      cookiePolicy={"single_host_origin"}
                    /> */}

                    {/* <LoginSocialGoogle
        client_id={"319610179427-jpk3o0rcbc5p5jst5irm405imi2hp39k.apps.googleusercontent.com"}
        scope="openid profile email"
        discoveryDocs="claims_supported"
        access_type="offline"
        onResolve={({ provider, data }) => {
          console.log(provider, data);
        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
  <button className="mt-4 mb-4" style={{
        backgroundColor: "#FFFFFF",
        color: "#666666",
        width: "-webkit-fill-available",
        borderStyle: "solid", 
        borderWidth: "1px",   
        borderColor: "#BEBEBE",
        borderRadius: "10px"
      }}  onClick={handleGoogleLogin}> <img src={googleicon} alt="" /> Continue with Google</button>
      </LoginSocialGoogle> */}
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        New to our wave?{" "}
                        <Link style={{ color: "#00BFFF" }} to="/joinwave">
                          Create an account
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* <div className={styles.login_container}>
        <div className={styles.login_form_container}>
          <div className={styles.left}>
            <form className={styles.form_container} onSubmit={handleSubmit}>
              <h1>Login to Your Account</h1>
           
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
                className={styles.input}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                className={styles.input}
              />
              <Link to="/forgot-password" style={{ alignSelf: "flex-start" }}>
                <p style={{ padding: "0 15px" }}>Forgot Password ?</p>
              </Link>
              {error && <div className={styles.error_msg}>{error}</div>}
              <button type="submit" className={styles.green_btn}>
                Sign In
              </button>
            </form>
          </div>
          <div className={styles.right}>
            <h1>New Here ?</h1>
            <Link to="/adduser">
              <button type="button" className={styles.white_btn}>
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div> */}
      {/* <Footer/> */}
    </div>
  );
};

export default Login;
