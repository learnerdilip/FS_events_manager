import React from "react";
import { loadEvents } from "../actions/events";
import { connect } from "react-redux";
import EventsList from "./EventsList";

class EventsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvents();
  }
  render() {
    return (
      <ul>
        <EventsList events={this.props.events} />
      </ul>
    );
  }
}
const mapStateToProps = state => {
  return {
    events: state.eventReducer
  };
};
export default connect(mapStateToProps, { loadEvents })(EventsListContainer);
