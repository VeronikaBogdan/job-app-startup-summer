export const CATALOGUES_REQUEST = 'CATALOGUES_REQUEST';
export const CATALOGUES_SUCCESS = 'CATALOGUES_SUCCESS';
export const CATALOGUES_FAILURE = 'CATALOGUES_FAILURE';

export const getCatalogues = (token) => ({
  type: CATALOGUES_REQUEST,
  token,
});

export const succeedCatalogues = (catalogues) => ({
  type: CATALOGUES_SUCCESS,
  catalogues,
});

export const failCatalogues = (error) => ({
  type: CATALOGUES_FAILURE,
  error,
});

const initialState = {
  catalogues: [],
  loading: false,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CATALOGUES_REQUEST:
      return { ...state, loading: true };
    case CATALOGUES_SUCCESS:
      const { catalogues } = action;
      return { ...state, catalogues: catalogues, loading: false };
    case CATALOGUES_FAILURE:
      return { ...state, catalogues: [], loading: false, error: true };
    default:
      return state;
  }
};
