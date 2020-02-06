import React from "react";

export default function EventDetails(props) {
  console.log("propspropsprops", props);

  return (
    <div>
      <h1>{props.values.name}</h1>
      <i>{props.values.date}</i>
      <p>{props.values.description}</p>
    </div>
  );
}
