export const VACANCIES_REQUEST = 'VACANCIES_REQUEST';
export const VACANCIES_SUCCESS = 'VACANCIES_SUCCESS';
export const VACANCIES_FAILURE = 'VACANCIES_FAILURE';

export const getVacancies = (searchData) => ({
  type: VACANCIES_REQUEST,
  searchData,
});

export const succeedVacancies = (vacancies) => ({
  type: VACANCIES_SUCCESS,
  vacancies,
});

export const failVacancies = (error) => ({
  type: VACANCIES_FAILURE,
  error,
});

const initialState = {
  vacancies: [],
  loading: false,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case VACANCIES_REQUEST:
      return { ...state, loading: true };
    case VACANCIES_SUCCESS:
      const { vacancies } = action;
      return { ...state, vacancies: vacancies, loading: false };
    case VACANCIES_FAILURE:
      return { ...state, vacancies: [], loading: false, error: true };
    default:
      return state;
  }
};
