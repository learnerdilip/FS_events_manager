const initialState = [];

export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case "EVENTS_FETCHED": {
      if (!state) {
        return state;
      } else {
        return action.payload;
      }
    }
    default: {
      return state;
    }
  }
}
