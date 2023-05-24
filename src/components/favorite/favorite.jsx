import React from 'react';
import { ActionIcon } from '@mantine/core';

import { ReactComponent as Star } from '../../assets/svg/star.svg';

import { useStyles } from './styled-favorite';

export const Favorite = ({ isFavorite, vacancyId, onClick }) => {
  const { classes } = useStyles();

  return (
    <ActionIcon
      data-elem={`vacancy-${vacancyId}-shortlist-button`}
      className={isFavorite ? classes.starActive : classes.star}
      variant='transparent'
      onClick={onClick}
    >
      <Star />
    </ActionIcon>
  );
};
