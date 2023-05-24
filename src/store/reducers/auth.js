export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

export const getAuth = () => ({
  type: AUTH_REQUEST,
});

export const succeedAuth = (authData) => ({
  type: AUTH_SUCCESS,
  authData,
});

export const failAuth = (error) => ({
  type: AUTH_FAILURE,
  error,
});

const initialState = {
  authData: [],
  loading: true,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return { ...state, loading: true };
    case AUTH_SUCCESS:
      const { authData } = action;
      return { ...state, authData: authData, loading: false };
    case AUTH_FAILURE:
      return { ...state, authData: [], loading: false, error: true };
    default:
      return state;
  }
};
