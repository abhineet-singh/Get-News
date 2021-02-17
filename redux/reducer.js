const initialState = {
  newsArr: [],
};

const reducer = (state = initialState, action) => {
  console.log("🚀 ~ file: [reducer.js] ~ reducer");
  switch (action.type) {
    case "UPDATE_NEWSARR":
      const updatedState = {
        newsArr: action.newsContent,
      };
      console.log(updatedState === state);
      return updatedState;

    default:
      return state;
  }
};

export default reducer;
