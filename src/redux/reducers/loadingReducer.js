const stateDefault = {
  loading: false,
};

export const loadingReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "openLoading":
      return { loading: true };

    case "closeLoading":
      return { loading: false };

    default:
      return state;
  }
};
