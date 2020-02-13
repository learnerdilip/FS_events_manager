import React from "react";
import { connect } from "react-redux";
import { createEvent } from "../actions/events";
import EventForm from "./EventForm";
class CreateEventFormContainer extends React.Component {
  state = {
    name: "",
    date: "",
    description: ""
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.createEvent(this.state); //calling the function for dispatching
  };

  render() {
    console.log(this.props.formStates);
    return (
      <EventForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        event={this.state}
      />
    );
  }
}

function mapStateToProps(reduxState) {
  console.log("REDUX STATE IN THE FORM", reduxState);

  return {
    formState: reduxState
  };
}
export default connect(mapStateToProps, { createEvent })(
  CreateEventFormContainer
);
