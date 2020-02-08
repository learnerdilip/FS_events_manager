import React, { Component } from "react";
import { deleteEvent } from "../actions/events";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class EventDetails extends Component {
  render() {
    return this.props.state.length !== 1 ? (
      <h1>Loading...</h1>
    ) : (
      <div>
        <div>
          <h1>{this.props.state[0].name}</h1>
          <i>{this.props.state[0].date}</i>
          <p>{this.props.state[0].description}</p>
          <button
            onClick={() => {
              deleteEvent(this.props.state[0].id);
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
    state: reduxState.eventReducer
  };
}

export default connect(mapStateToProps)(EventDetails);
