const stateDefault = {
  mangPhim: [],
};

export const phimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "LAY_DANH_SACH_PHIM":
      return { ...state, mangPhim: [...state.mangPhim, ...action.mangPhim] };
    default:
      return state;
  }
};
