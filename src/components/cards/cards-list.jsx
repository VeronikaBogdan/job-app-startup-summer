import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { Stack } from '@mantine/core';

import { COUNT } from '../../app-constants';

import { getVacancies } from '../../store/reducers/vacancies';
import { getTokenFromStorage } from '../../utils/token-getter';
import { getAllFavorites } from './card/card.helper';

import { Card } from '../cards/card/card';
import { EmptyState } from '../empty-state/empty-state';
import { Search } from '../search/search';

import { useStyles } from './styled-cards-list';
import { PaginationComponent } from '../pagination/pagination';

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
  const vacanciesAmount =
    pathname === '/favorites' ? allFavorites.length : vacancies.objects?.length;

  const handleChangeSearchFromInput = (keyword) => {
    setSearchedData(keyword);
  };

  useEffect(() => {
    token &&
      dispatch(
        getVacancies({
          ...filteredData,
          ...searchedData,
          page: activePage - 1,
          ids: vacanciesIds,
          token: token,
        })
      );
  }, [filteredData, searchedData, activePage, vacanciesIds, token, dispatch]);

  return (
    <>
      <Stack className={isSearch ? classes.content : classes.wrapper} spacing={14}>
        {isSearch && <Search onChangeSearch={handleChangeSearchFromInput} />}
        {!!vacanciesAmount ? (
          <>
            {!loading &&
              vacancies.objects?.map((vacancy) => (
                <Link to={`/vacancy/${vacancy.id}`} key={vacancy.id}>
                  <Card
                    id={vacancy.id}
                    profession={vacancy.profession}
                    location={vacancy.town?.title}
                    typeOfWork={vacancy.type_of_work?.title}
                    paymentFrom={vacancy.payment_from}
                    paymentTo={vacancy.payment_to}
                    currency={vacancy.currency}
                  />
                </Link>
              ))}
            <PaginationComponent value={activePage} onChange={setPage} total={total} />
          </>
        ) : (
          <EmptyState />
        )}
      </Stack>
    </>
  );
};
