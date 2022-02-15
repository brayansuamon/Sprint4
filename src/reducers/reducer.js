const INITIAL_STATE = {
  userData: {
    color: "",
    email: "",
    name: "",
    photo: "",
    uid: "",
    username: "",
  },
  loading: "",
  error: "",
  tweets: [],
  open: false,
  tweetToDelete: "",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "setUserData":
      return {
        ...state,
        userData: { ...state.userData, ...action.payload },
      };
    default:
      return {
        ...state,
      };
  }
};

export { reducer, INITIAL_STATE };
