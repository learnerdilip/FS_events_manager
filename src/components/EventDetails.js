import React, { Component } from "react";
import { deleteEvent } from "../actions/events";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import EventForm from "./EventForm";

class EventDetails extends Component {
  render() {
    return this.props.event.length !== 1 ? (
      <h1>Loading...</h1>
    ) : this.props.edit ? (
      <EventForm
        prevFormDetails={this.props.prevDetails}
        event={this.props.event[0]}
      />
    ) : (
      <div>
        <div>
          <h1>{this.props.event[0].name}</h1>
          <i>{this.props.event[0].date}</i>
          <p>{this.props.event[0].description}</p>
          <button
            onClick={() => {
              deleteEvent(this.props.event[0].id);
              this.props.history.push("/event");
            }}
          >
            Delete this Post
          </button>
          <br />
          <br />
          <Link to="/">Go Home</Link> <p> </p>{" "}
          <Link to="/event">To Posts Page</Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    event: reduxState.eventReducer
  };
}

export default connect(mapStateToProps)(EventDetails);
