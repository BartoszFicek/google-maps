const initialState = {};

function MainReducer(state = initialState, action) {
  switch (action.type) {
    case "DEFAULT": {
      return { ...state, ...action };
    }
    default:
      return state;
  }
}

export default MainReducer;
