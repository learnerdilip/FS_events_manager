import React, { Component } from "react";
import CreateEventFormContainer from "./CreateEventFormContainer";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to class!</h1>
        <CreateEventFormContainer />
      </div>
    );
  }
}