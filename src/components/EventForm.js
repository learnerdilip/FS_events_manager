import React from "react";

export default function EventForm(props) {
  console.log("THE FORM COMP", props);
  return (
    <div>
      <form onSubmit={event => props.onSubmit(event)}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={props.values.name}
            onChange={event => props.onChange(event)}
          />
        </label>
        <label>
          Date
          <input
            type="date"
            name="date"
            value={props.values.date}
            onChange={event => props.onChange(event)}
          />
        </label>
        <label>
          Description{props.values.description}
          <textarea
            type="textarea"
            name="description"
            value={props.values.description}
            onChange={event => props.onChange(event)}
          />
        </label>
        <button type="submit">SAVE!</button>
      </form>
    </div>
  );
}
