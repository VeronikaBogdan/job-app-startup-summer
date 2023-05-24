import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { Pagination, Stack } from '@mantine/core';

import { COUNT, LIMIT_TOTAL } from '../../app-constants';

import { getVacancies } from '../../store/reducers/vacancies';
import { getAllFavorites } from '../../components/cards/card/card.helper';
import { getTokenFromStorage } from '../../utils/token-getter';

import { Card } from '../../components/cards/card/card';
import { EmptyState } from '../../components/empty-state/empty-state';
import { Search } from '../../components/search/search';

import { useStyles } from './styled-cards-list';

export const CardsList = ({ isSearch, filteredData, vacanciesIds }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { classes } = useStyles();

  const { vacancies, loading } = useSelector((state) => state.vacancies);
  const [searchedData, setSearchedData] = useState({});
  const [activePage, setPage] = useState(1);

  const total = Math.ceil(vacancies.total / COUNT);

  const token = getTokenFromStorage('access_token');
  const allFavorites = getAllFavorites();
  const vacanciesAmount = pathname === '/favorites' ? allFavorites.length : vacancies.objects?.length;

  const handleChangeSearchFromInput = (keyword) => {
    setSearchedData(keyword);
  };

  useEffect(() => {
    dispatch(getVacancies({ ...filteredData, ...searchedData, page: activePage - 1, ids: vacanciesIds, token: token }));
  }, [filteredData, searchedData, activePage, vacanciesIds]);

  return (
    <>
      <Stack className={isSearch ? classes.content : classes.wrapper} spacing={14}>
        {isSearch && <Search onChangeSearch={handleChangeSearchFromInput} />}
        {!!vacanciesAmount ? (
          <>
            {!loading &&
              vacancies.objects?.map((vacancy) => (
                <Link href={`/vacancy/${vacancy.id}`} key={vacancy.id}>
                  <Card
                    vacancyId={vacancy.id}
                    profession={vacancy.profession}
                    location={vacancy.town?.title}
                    typeOfWork={vacancy.type_of_work?.title}
                    paymentFrom={vacancy.payment_from}
                    paymentTo={vacancy.payment_to}
                    currency={vacancy.currency}
                  />
                </Link>
              ))}
            <Pagination
              classNames={{ control: classes.control }}
              sx={classes.root}
              value={activePage}
              onChange={setPage}
              total={total > LIMIT_TOTAL ? LIMIT_TOTAL : total}
              siblings={1}
            />
          </>
        ) : (
          <EmptyState />
        )}
      </Stack>
    </>
  );
};
