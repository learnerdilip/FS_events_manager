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
      const currentPostState = state.filter(post => post.id === action.payload);
      return currentPostState;
    }
    case "EVENT_DELETE_SUCCESS": {
      return [...state];
    }
    case "event/UPDATE": {
      //need to edit this
      return [...state];
    }
    default: {
      return [...state];
    }
  }
}
