import { FINAL_VACANCY_ID_INDEX, START_INDEX } from '../../../app-constants';

export const getSalaryRange = (paymentFrom, paymentTo) => {
  if (paymentFrom === 0 && paymentTo === 0) {
    return 'договорная';
  }

  if (paymentFrom === paymentTo) {
    return paymentFrom;
  }

  if (paymentTo === 0) {
    return `от ${paymentFrom}`;
  }

  if (paymentFrom === 0) {
    return `до ${paymentTo}`;
  }

  return `${paymentFrom} - ${paymentTo}`;
};

export const getAllFavorites = () =>
  Object.keys(localStorage).filter(
    (vacancy) => vacancy.slice(START_INDEX, FINAL_VACANCY_ID_INDEX) === 'favorite'
  );

export const getInitialFavoriteState = (vacancyId) =>
  Object.keys(localStorage).some(
    (vacancy) => vacancy.slice(FINAL_VACANCY_ID_INDEX) === vacancyId.toString()
  );
