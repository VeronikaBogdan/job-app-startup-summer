import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Box, Stack, TypographyStylesProvider } from '@mantine/core';

import { Layout } from '../../components/layout/layout';
import { Loader } from '../../components/loader/loader';
import { Card } from '../../components/cards/card/card';

import { START_VACANCY_ID_INDEX } from '../../app-constants';

import { getVacancy } from '../../store/reducers/vacancy';
import { getTokenFromStorage } from '../../utils/token-getter';

import { useStyles } from './styled-vacancy-page';

export const VacancyPage = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { classes } = useStyles();
  const { vacancy, loading } = useSelector((state) => state.vacancy);

  const vacancyId = pathname.slice(START_VACANCY_ID_INDEX);

  const token = getTokenFromStorage('access_token');

  useEffect(() => {
    dispatch(getVacancy({ vacancyId, token }));
  }, [token]);

  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <Stack className={classes.content}>
          <Card
            id={vacancyId}
            profession={vacancy.profession}
            location={vacancy.town?.title}
            typeOfWork={vacancy.type_of_work?.title}
            paymentFrom={vacancy.payment_from}
            paymentTo={vacancy.payment_to}
            currency={vacancy.currency}
          />
          <Box className={classes.vacancyRichText}>
            <TypographyStylesProvider>
              <div dangerouslySetInnerHTML={{ __html: vacancy.vacancyRichText }} />
            </TypographyStylesProvider>
          </Box>
        </Stack>
      )}
    </Layout>
  );
};
