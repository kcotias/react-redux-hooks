import { TIMES_CLICKED } from "../actions/actions";

const defaultState = {
  timesClicked: 0
};

function clickApp(state = defaultState, action) {
  switch (action.type) {
    case TIMES_CLICKED: {
      return {
        ...state,
        timesClicked: state.timesClicked + 1
      };
    }
    default:
      return defaultState;
  }
}

export default clickApp;
