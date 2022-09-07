const initialState = {
  videogames: [],
  genres: [],
  filtered: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_VIDEOGAMES":
      return {
        ...state,
        videogames: action.payload,
      };
    case "GET_GENRES":
      return {
        ...state,
        genres: action.payload,
      };
    case "SEARCH_BY_NAME":
      return {
        ...state,
        filtered: action.payload,
      };
    case "FILTER_BY":
      if (action.payload === "todos") {
        return {
          ...state,
          filtered: state.videogames,
        };
      } else if (action.payload === "creados") {
        return {
          ...state,
          filtered: state.videogames.filter((game) => game.createdInDb),
        };
      } else if (action.payload === "API") {
        return {
          ...state,
          filtered: state.videogames.filter((game) => !game.createdInDb),
        };
      } else {
        return {
          ...state,
          filtered: state.videogames.filter((game) =>
            game.genres.includes(action.payload)
          ),
        };
      }
    case "ORDER_BY":
      if (action.payload === "asc") {
        return {
          ...state,
          filtered: state.filtered.sort((a, b) => {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          }),
        };
      }
      if (action.payload === "desc") {
        return {
          ...state,
          filtered: state.filtered.sort((a, b) => {
            if (a.name > b.name) {
              return -1;
            }
            if (a.name < b.name) {
              return 1;
            }
            return 0;
          }),
        };
      }
      if (action.payload === "rating") {
        return {
          ...state,
          filtered: state.filtered.sort((a, b) => {
            if (a.rating > b.rating) {
              return -1;
            }
            if (a.rating < b.rating) {
              return 1;
            }
            return 0;
          }),
        };
      }
      break;
    default:
      return state;
  }
}

export default rootReducer;
