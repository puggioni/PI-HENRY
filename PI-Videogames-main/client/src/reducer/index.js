const initialState = {
  videogames: [],
  genres: [],
  filtered: [],
  backup: [],
  details: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_VIDEOGAMES":
      return {
        ...state,
        videogames: action.payload,
        backup: action.payload,
        filtered: action.payload,
      };
    case "GET_DETAILS":
      return {
        ...state,
        details: action.payload,
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
    case "ORDER_BY":
      if (action.payload === "A-Z") {
        return {
          ...state,
          filtered: [...state.filtered].sort((prev, next) => {
            if (prev.name > next.name) return 1;
            if (prev.name < next.name) return -1;
            return 0;
          }),
        };
      }

      if (action.payload === "Z-A") {
        return {
          ...state,
          filtered: [...state.filtered].sort((prev, next) => {
            if (prev.name > next.name) return -1;
            if (prev.name < next.name) return 1;
            return 0;
          }),
        };
      }

      if (action.payload === "desc") {
        return {
          ...state,
          filtered: [...state.filtered].sort(
            (prev, next) => prev.rating - next.rating
          ),
        };
      }

      if (action.payload === "asc") {
        return {
          ...state,
          filtered: [...state.filtered].sort(
            (prev, next) => next.rating - prev.rating
          ),
        };
      } else {
        return { ...state, filtered: state.backup };
      }
    case "FILTER_BY_GENRE":
      if (action.payload === "Todos") {
        return { ...state, filtered: state.backup };
      } else {
        return {
          ...state,
          filtered: state.backup.filter((game) => {
            return game.genres.find((genre) => {
              return genre === action.payload;
            });
          }),
        };
      }
    case "FILTER_BY_CREATED":
      if (action.payload === "Todos") {
        return { ...state, filtered: state.backup };
      }
      if (action.payload === "DB") {
        return {
          ...state,
          filtered: state.backup.filter((game) => typeof game.id === "string"),
        };
      }
      if (action.payload === "API") {
        return {
          ...state,
          filtered: state.backup.filter((game) => typeof game.id === "number"),
        };
      }
      break;
    default:
      return state;
  }
}

export default rootReducer;
