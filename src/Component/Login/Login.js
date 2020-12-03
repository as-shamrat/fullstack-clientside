import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import logo from "./../../Group 1329.png";
import "./Login.css";
import icon from "./../../iconGoogle.png";
import { Link, useHistory, useLocation } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from "../../App";
const firebaseConfig = {
  apiKey: "AIzaSyBXmRUv0o1Lu4486wShmPTfWzBXE0WKUd8",
  authDomain: "burj-al-arab-64cca.firebaseapp.com",
  databaseURL: "https://burj-al-arab-64cca.firebaseio.com",
  projectId: "burj-al-arab-64cca",
  storageBucket: "burj-al-arab-64cca.appspot.com",
  messagingSenderId: "311277083587",
  appId: "1:311277083587:web:acbe1a73b7afe9da323b76",
};
const Login = () => {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const [user, setUser] = useState({ name: "", email: "" });
  const goggleProvider = new firebase.auth.GoogleAuthProvider();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const handleGoogleSignIn = (event) => {
    firebase
      .auth()
      .signInWithPopup(goggleProvider)
      .then(function (result) {
        console.log(result);
        const newUser = { ...user };
        newUser.name = result.user.displayName;
        newUser.email = result.user.email;
        setUser(newUser);
        setLoggedInUser(newUser);
        history.replace(from);
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    event.preventDefault();
  };

  return (
    <Container style={{ textAlign: "center" }}>
      <img src={logo} alt="" style={{ width: "20%", margin: "20px auto" }} />
      <Form
        style={{
          width: "50%",
          minHeight: "400px",
          margin: "20px auto",
          border: "1px solid gray",
          padding: "40px",
          position: "relative",
        }}
      >
        <div
          style={{ position: "absolute", top: "120px", marginRight: "30px" }}
        >
          <h4>Login with</h4>

          <button className="login-btn" onClick={handleGoogleSignIn}>
            {" "}
            <img src={icon} style={{ width: "14%" }} />
            Continue with google
          </button>
          <p>
            Don't have an accout?{" "}
            <Link to="/newRegistration">create an account</Link>
          </p>
        </div>
      </Form>
      <h2>
        Hi {user.name} your email is {user.email}
      </h2>
    </Container>
  );
};

export default Login;
