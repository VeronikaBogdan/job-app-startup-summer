import { Link, useLocation } from 'react-router-dom';
import { Button, Stack, Title } from '@mantine/core';

import { ReactComponent as NoVacancies } from '../../assets/svg/no-vacancies.svg';

import { useStyles } from './styled-empty-state';

export const EmptyState = () => {
  const { pathname } = useLocation();
  const { classes } = useStyles();

  return (
    <Stack spacing={32} className={classes.wrapper}>
      <NoVacancies />
      <Title order={3} className={classes.message}>
        Упс, здесь еще ничего нет!
      </Title>
      {pathname === '/favorites' && (
        <Button component={Link} href='/' variant='light' className={classes.button}>
          Поиск Вакансий
        </Button>
      )}
    </Stack>
  );
};
