import React from "react";
import { connect } from "react-redux";
import EventDetails from "./EventDetails";
import { loadEvent, updateEvent, deleteEvent } from "../actions/events";

class EventDetailsContainer extends React.Component {
  state = {
    editMode: false,
    formValues: {
      name: "",
      date: "",
      description: ""
    }
  };
  componentDidMount() {
    this.props.loadEvent(Number(this.props.match.params.id));
  }

  onEdit = id => {
    // console.log("EVENT DETAILS BEFORE STATE CHANGE", this.props.event[0]);
    this.setState({
      editMode: true,
      formValues: {
        name: this.props.event[0].name,
        date: this.props.event[0].date,
        description: this.props.event[0].description
      }
    });
  };

  render() {
    // console.log("THIS IS THE STATE IN AFTER OnEDIT", this.state);
    const currentPost = this.props.event.find(
      post => post.id === parseInt(this.props.match.params.id)
    );
    return (
      <div>
        <EventDetails
          prevDetails={this.state.formValues}
          edit={this.state.editMode}
          history={this.props.history}
        />
        <button
          onClick={() => {
            this.onEdit(this.props.event[0].id);
          }}
        >
          EDIT
        </button>
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
