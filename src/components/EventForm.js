import React from "react";

export default function EventForm(props) {
  return (
    <div>
      <form onSubmit={event => props.onSubmit(event)}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={props.event.name}
            onChange={event => props.onChange(event)}
          />
        </label>
        <label>
          Date
          <input
            type="date"
            name="date"
            value={props.event.date}
            onChange={event => props.onChange(event)}
          />
        </label>
        <label>
          Description
          <textarea
            type="textarea"
            name="description"
            value={props.event.description}
            onChange={event => props.onChange(event)}
          />
        </label>
        <button type="submit">SAVE!</button>
      </form>
    </div>
  );
}
