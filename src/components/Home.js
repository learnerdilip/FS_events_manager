import React, { Component } from "react";
import CreateEventFormContainer from "./CreateEventFormContainer";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to class!</h1>
        <h3>Please add your post below</h3>
        <CreateEventFormContainer />
        <Link to="/event">Go to posts page</Link>
      </div>
    );
  }
}
