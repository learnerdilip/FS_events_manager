import React from "react";
import { connect } from "react-redux";
import EventDetails from "./EventDetails";
import { loadEvent, updateEvent, deleteEvent } from "../actions/events";

class EventDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvent(Number(this.props.match.params.id));
  }

  render() {
    const currentPost = this.props.event.find(
      post => post.id === parseInt(this.props.match.params.id)
    );
    return (
      <div>
        <EventDetails
          // edit={this.state.editMode}
          history={this.props.history}
        />
        {/* <button onClick={() => this.onEdit()}>EDIT</button> */}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    event: state.eventReducer
  };
};
export default connect(mapStateToProps, { loadEvent })(EventDetailsContainer);
