import request from "superagent";
export const EVENTS_FETCHED = "EVENTS_FETCHED";
const baseUrl = "http://localhost:4000";

const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  payload: events
});
export const loadEvents = () => (dispatch, getState) => {
  if (getState().events) return;
  request(`${baseUrl}/event`)
    .then(response => {
      dispatch(eventsFetched(response.body));
    })
    .catch(console.error);
};

export const EVENT_CREATE_SUCCESS = "EVENT_CREATE_SUCCESS";
const eventCreateSuccess = event => ({
  type: EVENT_CREATE_SUCCESS,
  payload: event
});
export const createEvent = data => dispatch => {
  request
    .post(`${baseUrl}/event`)
    .send(data)
    .then(response => {
      dispatch(eventCreateSuccess(response.body));
    })
    .catch(console.error);
};

export const loadEvent = id => {
  return {
    type: "EVENT_FETCHED",
    payload: id
  };
};

const delE = id => {
  console.log(id, "Need to update the state");
  return {
    type: "EVENT_DELETE_SUCCESS",
    payload: id
  };
};

export const deleteEvent = id => dispatch => {
  request.del(`${baseUrl}/event/${id}`).then(response => {
    if (response.body.success) {
      // console.log("DELETE successful");
      dispatch(delE(id));
    } else {
      return;
    }
  });
};

export const updateEvent = (eventId, data) => {
  return {
    type: "event/UPDATE",
    payload: eventId,
    data
  };
};
