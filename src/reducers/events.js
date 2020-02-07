const initialState = [];

export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case "EVENTS_FETCHED": {
      if (!state) {
        return state;
      } else {
        return [...state, ...action.payload];
      }
    }
    case "EVENT_FETCHED": {
      const currentPayload = action.payload;
      return [currentPayload];
    }
    default: {
      return state;
    }
  }
}
