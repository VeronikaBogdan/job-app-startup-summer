import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { Flex, Group, Stack, Text, Title } from '@mantine/core';

import Images from '../../../assets/svg/index';

import { getVacancies } from '../../../store/reducers/vacancies';
import { getTokenFromStorage } from '../../../utils/token-getter';
import { getAllFavorites, getInitialFavoriteState, getSalaryRange } from './card.helper';

import { Favorite } from '../../../components/favorite/favorite';

import { useStyles } from './styled-card';

export const Card = ({ vacancyId, profession, location, typeOfWork, paymentFrom, paymentTo, currency }) => {
  const dispatch = useDispatch();
  const { classes } = useStyles();

  const initialFavoriteState = getInitialFavoriteState(vacancyId);
  const [isFavorite, setIsFavorite] = useState(initialFavoriteState);

  const { pathname } = useLocation();

  const isVacancyPage = pathname === '/vacancy/';
  // const isVacancyPage = pathname === '/vacancy/';

  const salaryRange = getSalaryRange(paymentFrom, paymentTo);
  const token = getTokenFromStorage('access_token');

  const toggleButton = (event) => {
    event.preventDefault();
    setIsFavorite(!isFavorite);
  };

  const addToFavorites = (event) => {
    toggleButton(event);
    localStorage.setItem(`favorite${vacancyId}`, vacancyId);
  };

  const removeFromFavorites = (event) => {
    toggleButton(event);
    localStorage.removeItem(`favorite${vacancyId}`);

    token && dispatch(getVacancies({ ids: getAllFavorites(), token: token }));
  };

  return (
    <Stack
      data-elem={`vacancy-${vacancyId}`}
      className={isVacancyPage ? classes.vacancyCard : classes.card}
      spacing={11}
    >
      <Flex justify='space-between'>
        <Title order={3} className={isVacancyPage ? classes.vacancyProfessionTitle : classes.professionTitle}>
          {profession}
        </Title>
        <Favorite
          vacancyId={vacancyId}
          isFavorite={isFavorite}
          onClick={isFavorite ? removeFromFavorites : addToFavorites}
        />
      </Flex>
      <Group className={classes.infoGroup}>
        <Text className={isVacancyPage ? classes.vacancyPaymentText : classes.paymentText}>
          з/п {salaryRange} {currency}
        </Text>
        <Images.Point />
        <Text className={isVacancyPage ? classes.vacancyWorkText : classes.workText}>{typeOfWork}</Text>
      </Group>
      <Flex className={classes.locationWrapper}>
        <Images.Location />
        <Text className={isVacancyPage ? classes.vacancyLocationText : classes.locationText}>{location}</Text>
      </Flex>
    </Stack>
  );
};
