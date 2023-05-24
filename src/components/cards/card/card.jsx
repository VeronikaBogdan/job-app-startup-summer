import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router';

import { Flex, Group, Stack, Text, Title } from '@mantine/core';

import { ReactComponent as Location } from '../../../assets/svg/location.svg';
import { ReactComponent as Point } from '../../../assets/svg/point.svg';

import { getVacancies } from '../../../store/reducers/vacancies';
import { getTokenFromStorage } from '../../../utils/token-getter';
import { getAllFavorites, getInitialFavoriteState, getSalaryRange } from './card.helper';

import { Favorite } from '../../../components/favorite/favorite';

import { useStyles } from './styled-card';

export const Card = ({ id, profession, location, typeOfWork, paymentFrom, paymentTo, currency }) => {
  const dispatch = useDispatch();
  const { classes } = useStyles();
  // const { vacancyId } = useParams();

  const initialFavoriteState = getInitialFavoriteState(id);
  const [isFavorite, setIsFavorite] = useState(initialFavoriteState);

  const { pathname } = useLocation();

  const isVacancyPage = pathname === `/vacancy/${id}`;

  const salaryRange = getSalaryRange(paymentFrom, paymentTo);
  const token = getTokenFromStorage('access_token');

  const toggleButton = (event) => {
    event.preventDefault();
    setIsFavorite(!isFavorite);
  };

  const addToFavorites = (event) => {
    toggleButton(event);
    localStorage.setItem(`favorite${id}`, id);
  };

  const removeFromFavorites = (event) => {
    toggleButton(event);
    localStorage.removeItem(`favorite${id}`);

    token && dispatch(getVacancies({ ids: getAllFavorites(), token: token }));
  };

  return (
    <Stack data-elem={`vacancy-${id}`} className={isVacancyPage ? classes.vacancyCard : classes.card} spacing={11}>
      <Flex justify='space-between'>
        <Title order={3} className={isVacancyPage ? classes.vacancyProfessionTitle : classes.professionTitle}>
          {profession}
        </Title>
        <Favorite id={id} isFavorite={isFavorite} onClick={isFavorite ? removeFromFavorites : addToFavorites} />
      </Flex>
      <Group className={classes.infoGroup}>
        <Text className={isVacancyPage ? classes.vacancyPaymentText : classes.paymentText}>
          з/п {salaryRange} {currency}
        </Text>
        <Point />
        <Text className={isVacancyPage ? classes.vacancyWorkText : classes.workText}>{typeOfWork}</Text>
      </Group>
      <Flex className={classes.locationWrapper}>
        <Location />
        <Text className={isVacancyPage ? classes.vacancyLocationText : classes.locationText}>{location}</Text>
      </Flex>
    </Stack>
  );
};
