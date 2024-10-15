import React, { Component } from "react";
import Header from "./Header";
import User from "./User";
import UserClass from "./userClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent render")
    return (
      <>
        <UserClass name={"Irfan Koya"} location={"Ernakulam"} />
        <UserClass name={"Elon Musk"} location={"Florida"} />

        <h1>React is awesome</h1>
        <p>React is totally component based</p>
      </>
    );
  }
}

export default About;
