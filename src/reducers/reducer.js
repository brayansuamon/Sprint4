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
    case "getTweets":
      return {
        ...state,
        tweets: action.payload,
      };
    case "INITIAL_STATE":
      return {
        ...INITIAL_STATE,
        userData: {
          ...INITIAL_STATE.userData,
        },
      };
    case "setLoading":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export { reducer, INITIAL_STATE };
