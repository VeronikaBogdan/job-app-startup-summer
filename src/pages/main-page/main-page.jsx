import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Flex } from '@mantine/core';

import { getCatalogues } from '../../store/reducers/catalogues';
import { getVacancies } from '../../store/reducers/vacancies';

import { CardsList } from '../../components/cards/cards-list';
import { Filters } from '../../components/filters/filters';
import { Layout } from '../../components/layout/layout';
import { Loader } from '../../components/loader/loader';

import { useStyles } from './styled-main-page';

export const MainPage = ({ token }) => {
  const dispatch = useDispatch();
  const { classes } = useStyles();
  const [filteredData, setFilteredData] = useState({});

  const { loading: isLoadingCatalogues } = useSelector((state) => state.catalogues);
  const { loading: isLoadingVacancies } = useSelector((state) => state.vacancies);

  const isLoading = isLoadingCatalogues || isLoadingVacancies;

  useEffect(() => {
    token && dispatch(getCatalogues({ token })) && dispatch(getVacancies({ token }));
  }, [token]);

  const handleChangeFilteredData = (filteredData) => {
    setFilteredData(filteredData);
  };

  return (
    <>
      {isLoading && <Loader />}
      <Layout>
        <Flex className={classes.wrapper}>
          <Filters onChangeFilteredData={handleChangeFilteredData} />
          <CardsList isSearch filteredData={filteredData} />
        </Flex>
      </Layout>
    </>
  );
};
