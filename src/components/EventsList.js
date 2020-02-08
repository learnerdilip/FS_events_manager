import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
import { loadEvent } from "../actions/events";

export default class EventsList extends Component {
  render() {
    return (
      <div>
        <h1>The events list page</h1>
        <ul>
          {this.props.events.map(event => {
            return (
              <Link
                onClick={() => loadEvent(event.id)}
                to={`/event/${event.id}`}
              >
                <li>{event.name}</li>
              </Link>
            );
          })}
        </ul>
        <Link to="/">HOME</Link>
      </div>
    );
  }
}
