import React from "react";

export default function EventDetails(props) {
  console.log("EVENT DETAILS ARRAY", props);
  return !props.curr ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <div>
        <h1>{props.curr.name}</h1>
        <i>{props.curr.date}</i>
        <p>{props.curr.description}</p>
        <button onClick={() => deletePost(props.curr.id)}>
          Delete this Post
        </button>
      </div>
    </div>
  );
}

const deletePost = id => {
  console.log("You want to del me?", id);
};
