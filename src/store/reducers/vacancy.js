export const VACANCY_REQUEST = 'VACANCY_REQUEST';
export const VACANCY_SUCCESS = 'VACANCY_SUCCESS';
export const VACANCY_FAILURE = 'VACANCY_FAILURE';

export const getVacancy = (vacancyId) => ({
  type: VACANCY_REQUEST,
  vacancyId,
});

export const succeedVacancy = (vacancy) => ({
  type: VACANCY_SUCCESS,
  vacancy,
});

export const failVacancy = (error) => ({
  type: VACANCY_FAILURE,
  error,
});

const initialState = {
  vacancy: {},
  loading: true,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case VACANCY_REQUEST:
      return { ...state, loading: true };
    case VACANCY_SUCCESS:
      const { vacancy } = action;
      return { ...state, vacancy: vacancy, loading: false };
    case VACANCY_FAILURE:
      return { ...state, vacancy: [], loading: false, error: true };
    default:
      return state;
  }
};
