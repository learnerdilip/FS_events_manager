import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";

export default class EventsList extends Component {
  render() {
    return (
      <div>
        <h1>The events list page</h1>
        <ul>
          {this.props.events.map(event => {
            return (
              <Link to="">
                <li>{event.description}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}
