const initialState = {
  onSidebar: false
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SIDEBAR_OPEN':
      return {
        onSidebar: true
      };
    default:
      return state;
  }

};

export default reducer;
