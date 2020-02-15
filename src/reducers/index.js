const initialState = {
  onSidebar: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIDEBAR_OPEN":
      return {
        onSidebar: !state.onSidebar
      };
    case "SIDEBAR_CLOSE":
      return {
        onSidebar: false
      };
    default:
      return state;
  }
};

export default reducer;
