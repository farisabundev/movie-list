export const SET_MOVIES = "MAIN/SET_MOVIES";

export const setMovies = (arr) => ({
  type: SET_MOVIES,
  arr,
});

const initialState = {
  movies: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: action.arr || [],
      };

    default:
  }
  
  return state;
}
