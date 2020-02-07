import React from "react";
import { useDispatch } from "react-redux";
import { deleteEvent } from "../actions/events";
import { Redirect } from "react-router";
export default function EventDetails(props) {
  const dispatch = useDispatch();
  console.log("EVENT DETAILS ARRAY", props);
  return !props.curr ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <div>
        <h1>{props.curr.name}</h1>
        <i>{props.curr.date}</i>
        <p>{props.curr.description}</p>
        <button
          onClick={() => {
            dispatch(deleteEvent(props.curr.id));
            props.history.push("/event");
          }}
        >
          Delete this Post
        </button>
        <button>Edit</button>
      </div>
    </div>
  );
}
