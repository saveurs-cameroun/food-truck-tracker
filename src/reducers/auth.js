import types from "../types/auth";

const initialState = {
  loggedIn: false,
  isFetching: false,
  hasError: false,
  errorMessage: "",
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    // LOGIN REDUCERS
    case types.LOGIN_START: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case types.LOGIN_FINISHED: {
      const { user } = action;
      return {
        ...state,
        isFetching: false,
        loggedIn: true,
        user,
      };
    }
    case types.LOGIN_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        loggedIn: false,
        hasError: true,
        user: null,
        errorMessage: error,
      };
    }
    // GOOGLE LOGIN REDUCER
    case types.GOOGLE_LOGIN_START: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case types.GOOGLE_LOGIN_FINISHED: {
      const { user } = action;
      return {
        ...state,
        isFetching: false,
        loggedIn: true,
        user,
      };
    }
    case types.GOOGLE_LOGIN_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        loggedIn: false,
        hasError: true,
        user: null,
        errorMessage: error,
      };
    }
    // LOGOUT REDUCERS
    case types.LOGOUT_START: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case types.LOGOUT_FINISHED: {
      return {
        ...initialState,
      };
    }
    case types.LOGOUT_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        loggedIn: true,
        hasError: true,
        errorMessage: error,
      };
    }
    // REGISTER REDUCERS
    case types.REGISTER_START: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case types.REGISTER_FINISHED: {
      const { user } = action;
      return {
        ...state,
        isFetching: false,
        loggedIn: true,
        user,
      };
    }
    case types.REGISTER_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        loggedIn: false,
        hasError: true,
        user: null,
        errorMessage: error,
      };
    }
    default: {
      return state;
    }
  }
};
